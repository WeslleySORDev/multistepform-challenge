type CustomInputWrapperProps = {
  message?: string;
  label: string;
  children: React.ReactNode;
};

export function CustomInputWrapper({
  children,
  message,
  label,
}: CustomInputWrapperProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-sm text-primary-MarineBlue" htmlFor="form-name">
          {label}*
        </label>
        {message ? message : null}
        {/* {missingValue && client.name === "" ? (
          <span className="text-sm font-bold text-primary-StrawberryRed">
            This field is required
          </span>
        ) : null} */}
      </div>
      {children}
    </div>
  );
}
