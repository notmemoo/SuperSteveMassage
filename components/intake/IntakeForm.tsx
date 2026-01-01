"use client";

import { useState } from "react";
import { IntakeFormData, initialFormData, medicalConditionsList, usStates } from "./types";
import FormSection from "./FormSection";
import BodyDiagram from "./BodyDiagram";
import SignaturePad from "./SignaturePad";

const steps = [
  { id: 1, name: "Contact Info" },
  { id: 2, name: "Medical History" },
  { id: 3, name: "Body & Pain" },
  { id: 4, name: "Recent History" },
  { id: 5, name: "Consent & Waiver" },
];

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IntakeFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof IntakeFormData, value: string | string[] | boolean | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleMedicalCondition = (condition: string) => {
    const current = formData.medicalConditions;
    if (current.includes(condition)) {
      updateField("medicalConditions", current.filter((c) => c !== condition));
    } else {
      updateField("medicalConditions", [...current, condition]);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#2D2D2D] mb-4">
          Form Submitted Successfully!
        </h2>
        <p className="text-[#6B6B6B] mb-8">
          Thank you for completing your intake form. Steve will review your information before your appointment.
        </p>
        <a
          href="https://www.massagebook.com/biz/superstevemassage"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium transition-all"
        >
          Book Your Appointment
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex-1 text-center text-xs sm:text-sm font-medium ${
                step.id <= currentStep ? "text-[#C4704A]" : "text-[#6B6B6B]"
              }`}
            >
              <span className="hidden sm:inline">{step.name}</span>
              <span className="sm:hidden">{step.id}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-[#E8D5C4] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C4704A] transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-[#6B6B6B] mt-2">
          Step {currentStep} of {steps.length}
        </p>
      </div>

      {/* Step 1: Contact Information */}
      {currentStep === 1 && (
        <>
          <FormSection title="Client Contact Information" description="Please provide your contact details.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="(___) ___-____"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="example@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Birth Date <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  value={formData.birthMonth}
                  onChange={(e) => updateField("birthMonth", e.target.value)}
                  className="px-3 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all bg-white"
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
                  ))}
                </select>
                <select
                  value={formData.birthDay}
                  onChange={(e) => updateField("birthDay", e.target.value)}
                  className="px-3 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all bg-white"
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select
                  value={formData.birthYear}
                  onChange={(e) => updateField("birthYear", e.target.value)}
                  className="px-3 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all bg-white"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Street Address</label>
                <input
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => updateField("streetAddress", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Enter street address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Enter city"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">State</label>
                <select
                  value={formData.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select state</option>
                  {usStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Zip Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => updateField("zipCode", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Enter zip code"
                />
              </div>
            </div>
          </FormSection>

          <FormSection title="Emergency Contact Information">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Name</label>
                <input
                  type="text"
                  value={formData.emergencyContactName}
                  onChange={(e) => updateField("emergencyContactName", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.emergencyContactPhone}
                  onChange={(e) => updateField("emergencyContactPhone", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                  placeholder="Emergency contact phone"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">How did you hear about us?</label>
              <input
                type="text"
                value={formData.howDidYouHear}
                onChange={(e) => updateField("howDidYouHear", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                placeholder="Google, referral, social media, etc."
              />
            </div>
          </FormSection>

          <FormSection title="Massage Experience">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Have you ever experienced a professional massage or bodywork session? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.previousMassageExperience}
                onChange={(e) => updateField("previousMassageExperience", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Do you have any specific area you would like us to focus on today? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.areasToFocus}
                onChange={(e) => updateField("areasToFocus", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Do you have any specific area you would like us to avoid today? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.areasToAvoid}
                onChange={(e) => updateField("areasToAvoid", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Are you feeling any numbness or tingling in any areas? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.numbnessOrTingling}
                onChange={(e) => updateField("numbnessOrTingling", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
              />
            </div>
          </FormSection>
        </>
      )}

      {/* Step 2: Medical History */}
      {currentStep === 2 && (
        <>
          <FormSection 
            title="Medical History" 
            description="Please check the box if you have any of the following conditions."
          >
            {medicalConditionsList.map((category) => (
              <div key={category.category} className="mb-6">
                <h4 className="font-semibold text-[#2D2D2D] mb-3 text-sm uppercase tracking-wider">
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.items.map((condition) => (
                    <label
                      key={condition}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F5EDE5] cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.medicalConditions.includes(condition)}
                        onChange={() => toggleMedicalCondition(condition)}
                        className="w-4 h-4 rounded border-[#E8D5C4] text-[#C4704A] focus:ring-[#C4704A]"
                      />
                      <span className="text-sm text-[#2D2D2D]">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Allergy List
              </label>
              <textarea
                rows={2}
                value={formData.allergyList}
                onChange={(e) => updateField("allergyList", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
                placeholder="List any allergies..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Any Surgeries? If yes, when and where. Please include cosmetic. <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.surgeryHistory}
                onChange={(e) => updateField("surgeryHistory", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Areas of joint issue
              </label>
              <input
                type="text"
                value={formData.jointIssueAreas}
                onChange={(e) => updateField("jointIssueAreas", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
              />
            </div>
          </FormSection>

          <FormSection title="Medications">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Please list any medications or drugs you are currently on (e.g., Statins or warfarins)
              </label>
              <textarea
                rows={2}
                value={formData.currentMedications}
                onChange={(e) => updateField("currentMedications", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Are you on any high blood pressure or high cholesterol medication or blood thinners?
              </label>
              <input
                type="text"
                value={formData.bloodPressureMeds}
                onChange={(e) => updateField("bloodPressureMeds", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Allergies or Skin sensitivities your provider should be aware of?
              </label>
              <textarea
                rows={2}
                value={formData.skinAllergies}
                onChange={(e) => updateField("skinAllergies", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
          </FormSection>
        </>
      )}

      {/* Step 3: Body Diagram & Pain Assessment */}
      {currentStep === 3 && (
        <>
          <FormSection 
            title="Body Diagram" 
            description="Click or tap the area(s) in question and describe sensation(s) i.e. tight, sharp pain, sore, bruising, dull ache, etc."
          >
            <BodyDiagram
              markers={formData.bodyMarkers}
              onMarkersChange={(markers) => updateField("bodyMarkers", markers as unknown as string[])}
            />
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Cause of injury or concern
              </label>
              <textarea
                rows={2}
                value={formData.causeOfInjury}
                onChange={(e) => updateField("causeOfInjury", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
          </FormSection>

          <FormSection title="Issues to Address">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                If you are currently experiencing pain, how would you rate your pain on a scale of 1-10?
              </label>
              <input
                type="text"
                value={formData.painScale}
                onChange={(e) => updateField("painScale", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
                placeholder="example: upper back 6/10, neck 5/10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                What activities make your pain worse?
              </label>
              <textarea
                rows={2}
                value={formData.painWorse}
                onChange={(e) => updateField("painWorse", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                What helps you relieve your pain?
              </label>
              <textarea
                rows={2}
                value={formData.painRelief}
                onChange={(e) => updateField("painRelief", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Treatment Goals
              </label>
              <textarea
                rows={2}
                value={formData.treatmentGoals}
                onChange={(e) => updateField("treatmentGoals", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                How long since first noticed?
              </label>
              <input
                type="text"
                value={formData.howLongSinceNoticed}
                onChange={(e) => updateField("howLongSinceNoticed", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Past treatments
              </label>
              <textarea
                rows={2}
                value={formData.pastTreatments}
                onChange={(e) => updateField("pastTreatments", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all resize-none"
              />
            </div>
          </FormSection>
        </>
      )}

      {/* Step 4: Recent History */}
      {currentStep === 4 && (
        <FormSection 
          title="Recent History" 
          description="In the past 2 weeks..."
        >
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Have you been sick, or around anyone sick in the last week? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.recentlyBeenSick}
              onChange={(e) => updateField("recentlyBeenSick", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Are you currently feeling any numbness or tingling in any areas? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.currentNumbness}
              onChange={(e) => updateField("currentNumbness", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Have you consumed alcohol within the last 24 hours? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.alcoholLast24Hours}
              onChange={(e) => updateField("alcoholLast24Hours", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Have you used any Marijuana products within the last 30 days? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.marijuanaLast30Days}
              onChange={(e) => updateField("marijuanaLast30Days", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Have you taken any pain medications in the past 24 hours? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.painMedsLast24Hours}
              onChange={(e) => updateField("painMedsLast24Hours", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Have you had any surgeries in the past 8 weeks? If yes, where and when? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.recentSurgeries}
              onChange={(e) => updateField("recentSurgeries", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Do you currently have any difficulty laying on your back, side or stomach? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.difficultyLayingDown}
              onChange={(e) => updateField("difficultyLayingDown", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
              Have you had any new tattoos in the past 8 weeks? If yes, where and when? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.recentTattoos}
              onChange={(e) => updateField("recentTattoos", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
            />
            <p className="text-xs text-[#6B6B6B] mt-1">Massage can blur a new tattoo</p>
          </div>
        </FormSection>
      )}

      {/* Step 5: Consent & Waiver */}
      {currentStep === 5 && (
        <>
          <FormSection title="Consent for Specific Areas">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  If you need to focus work on your thighs or glutes, do we have your permission to uncover your glutes? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="glutesPermission"
                      value="yes"
                      checked={formData.glutesPermission === "yes"}
                      onChange={(e) => updateField("glutesPermission", e.target.value)}
                      className="w-4 h-4 text-[#C4704A] focus:ring-[#C4704A]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="glutesPermission"
                      value="no"
                      checked={formData.glutesPermission === "no"}
                      onChange={(e) => updateField("glutesPermission", e.target.value)}
                      className="w-4 h-4 text-[#C4704A] focus:ring-[#C4704A]"
                    />
                    <span>No</span>
                  </label>
                </div>
                {formData.glutesPermission === "yes" && (
                  <div className="mt-4">
                    <SignaturePad
                      label="Signature for consent to uncover glutes if needed"
                      onSignatureChange={(sig) => updateField("glutesSignature", sig)}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  If you need to focus work on your chest muscles, do we have your permission to uncover your chest if needed? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="chestPermission"
                      value="yes"
                      checked={formData.chestPermission === "yes"}
                      onChange={(e) => updateField("chestPermission", e.target.value)}
                      className="w-4 h-4 text-[#C4704A] focus:ring-[#C4704A]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="chestPermission"
                      value="no"
                      checked={formData.chestPermission === "no"}
                      onChange={(e) => updateField("chestPermission", e.target.value)}
                      className="w-4 h-4 text-[#C4704A] focus:ring-[#C4704A]"
                    />
                    <span>No</span>
                  </label>
                </div>
                {formData.chestPermission === "yes" && (
                  <div className="mt-4">
                    <SignaturePad
                      label="Signature for consent to uncover chest if needed"
                      onSignatureChange={(sig) => updateField("chestSignature", sig)}
                    />
                  </div>
                )}
              </div>

              <div className="bg-[#F5EDE5] p-4 rounded-xl">
                <p className="text-sm text-[#2D2D2D] mb-4">
                  I will tell my practitioner of all discomforts I have, no matter how small, & I will communicate as best I can with my therapist, so that I may have the best treatment possible. <span className="text-red-500">*</span>
                </p>
                <SignaturePad
                  label="Signature"
                  required
                  onSignatureChange={(sig) => updateField("communicationSignature", sig)}
                />
              </div>
            </div>
          </FormSection>

          <FormSection title="Client Waiver Form">
            <div className="bg-[#F5EDE5] p-4 rounded-xl mb-6">
              <p className="text-sm text-[#2D2D2D] mb-4">
                Please take a moment to read and initial the following information:
              </p>
              <ul className="space-y-3 text-sm text-[#2D2D2D]">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>I understand that massage therapy is provided for stress reduction, relaxation, relief from muscular tension, and improvement of circulation and energy flow.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>If I experience pain or discomfort during the session, I will immediately inform my therapist so that pressure/strokes can be adjusted to my level of comfort. I will not hold my therapist responsible for any pain or discomfort I experience during or after the session.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>I understand that the services offered today are not a substitute for medical care. I understand that my therapist is not qualified to perform spinal or skeletal adjustments, diagnose, prescribe, or treat physical or mental illness.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>I affirm that I have notified my therapist of all known medical conditions and injuries.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>I agree to inform the therapist of any changes in my health and medical condition. I understand that there shall be no liability on the therapist&apos;s part should I forget to do so.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>I understand that massage is entirely therapeutic and non-sexual in nature.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>By signing this release, I hereby waive and release my therapist, Steve Thompson and Steve Thompson Massage Therapy LLC from any and all liability, past, present, and future relating to massage therapy and bodywork.</span>
                </li>
              </ul>
            </div>

            <SignaturePad
              label="Signature"
              required
              onSignatureChange={(sig) => updateField("waiverSignature", sig)}
            />

            <div className="mt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.waiverAgreed}
                  onChange={(e) => updateField("waiverAgreed", e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded border-[#E8D5C4] text-[#C4704A] focus:ring-[#C4704A]"
                />
                <span className="text-sm text-[#2D2D2D]">
                  I have read the statement above and agree to all the policies <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.waiverDate}
                onChange={(e) => updateField("waiverDate", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] focus:border-[#C4704A] focus:ring-2 focus:ring-[#C4704A]/20 outline-none transition-all"
              />
            </div>
          </FormSection>
        </>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            currentStep === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#F5EDE5] text-[#2D2D2D] hover:bg-[#E8D5C4]"
          }`}
        >
          ← Previous
        </button>

        {currentStep < steps.length ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-6 py-3 rounded-full font-medium bg-[#C4704A] text-white hover:bg-[#A85D3B] transition-all"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.waiverAgreed || !formData.waiverSignature}
            className={`px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
              isSubmitting || !formData.waiverAgreed || !formData.waiverSignature
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#C4704A] text-white hover:bg-[#A85D3B]"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Form"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default IntakeForm;


