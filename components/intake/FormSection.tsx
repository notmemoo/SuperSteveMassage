interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const FormSection = ({ title, description, children }: FormSectionProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8D5C4] mb-6">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[#2D2D2D] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-[#6B6B6B] text-sm mb-6">{description}</p>
      )}
      <div className="space-y-5">{children}</div>
    </div>
  );
};

export default FormSection;


