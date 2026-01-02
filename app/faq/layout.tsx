import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Super Steve Massage Therapy",
    description: "Frequently asked questions about massage therapy services, booking, cancellations, and what to expect at your appointment.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
