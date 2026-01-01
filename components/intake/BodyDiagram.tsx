"use client";

import { useState } from "react";
import Image from "next/image";
import { BodyMarker } from "./types";

interface BodyDiagramProps {
  markers: BodyMarker[];
  onMarkersChange: (markers: BodyMarker[]) => void;
}

const BodyDiagram = ({ markers, onMarkersChange }: BodyDiagramProps) => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, view: "front" | "back") => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newMarker: BodyMarker = {
      id: `marker-${Date.now()}`,
      x,
      y,
      view,
      description: "",
    };

    onMarkersChange([...markers, newMarker]);
    setSelectedMarker(newMarker.id);
  };

  const updateMarkerDescription = (id: string, description: string) => {
    const updated = markers.map((m) =>
      m.id === id ? { ...m, description } : m
    );
    onMarkersChange(updated);
  };

  const removeMarker = (id: string) => {
    onMarkersChange(markers.filter((m) => m.id !== id));
    setSelectedMarker(null);
  };

  const frontMarkers = markers.filter((m) => m.view === "front");
  const backMarkers = markers.filter((m) => m.view === "back");

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#6B6B6B]">
        Click on the body diagram to mark areas of concern. Describe the sensation for each marker (tight, sharp pain, sore, bruising, dull ache, etc.)
      </p>

      {/* Body Diagram Image with Clickable Overlay */}
      <div className="bg-white rounded-xl border-2 border-[#E8D5C4] p-4 overflow-hidden">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* The actual diagram image */}
          <Image
            src="/images/diagram.jpg"
            alt="Body diagram for marking areas of concern"
            width={600}
            height={500}
            className="w-full h-auto"
            priority
          />
          
          {/* Invisible overlay divided into front (left half) and back (right half) for clicking */}
          <div className="absolute inset-0 flex">
            {/* Front body area (left ~33%) */}
            <div 
              className="w-[33%] h-full cursor-crosshair relative"
              onClick={(e) => handleClick(e, "front")}
            >
              {/* Front Markers */}
              {frontMarkers.map((marker, index) => (
                <div
                  key={marker.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${marker.x}%`,
                    top: `${marker.y}%`,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMarker(marker.id);
                  }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer transition-all ${
                    selectedMarker === marker.id 
                      ? "bg-[#A85D3B] scale-125 ring-2 ring-white shadow-lg" 
                      : "bg-[#C4704A] hover:scale-110"
                  }`}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Side body area (middle ~33%) */}
            <div className="w-[34%] h-full cursor-crosshair relative">
              {/* Side view - you could add markers here too if needed */}
            </div>
            
            {/* Back body area (right ~33%) */}
            <div 
              className="w-[33%] h-full cursor-crosshair relative"
              onClick={(e) => handleClick(e, "back")}
            >
              {/* Back Markers */}
              {backMarkers.map((marker, index) => (
                <div
                  key={marker.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${marker.x}%`,
                    top: `${marker.y}%`,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMarker(marker.id);
                  }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer transition-all ${
                    selectedMarker === marker.id 
                      ? "bg-[#A85D3B] scale-125 ring-2 ring-white shadow-lg" 
                      : "bg-[#C4704A] hover:scale-110"
                  }`}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Labels */}
        <div className="flex justify-around mt-4 text-xs text-[#6B6B6B] font-medium">
          <span>FRONT</span>
          <span>SIDE</span>
          <span>BACK</span>
        </div>
      </div>

      <p className="text-center text-xs text-[#6B6B6B]">
        Click on the front (left) or back (right) body to mark areas of concern
      </p>

      {/* Marker descriptions */}
      {markers.length > 0 && (
        <div className="space-y-3 mt-6">
          <h4 className="font-medium text-[#2D2D2D]">
            Marked Areas ({markers.length})
          </h4>
          {markers.map((marker, index) => (
            <div
              key={marker.id}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedMarker === marker.id
                  ? "border-[#C4704A] bg-[#C4704A]/5"
                  : "border-[#E8D5C4] bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#C4704A] text-white text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-[#2D2D2D] capitalize">
                    {marker.view} view
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeMarker(marker.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                placeholder="Describe sensation (tight, sharp pain, sore, dull ache, etc.)"
                value={marker.description}
                onChange={(e) => updateMarkerDescription(marker.id, e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all text-sm"
              />
            </div>
          ))}
        </div>
      )}

      {markers.length === 0 && (
        <div className="text-center py-4 bg-[#F5EDE5] rounded-xl">
          <p className="text-sm text-[#6B6B6B]">
            No areas marked yet. Click on the body diagram above to add markers.
          </p>
        </div>
      )}
    </div>
  );
};

export default BodyDiagram;
