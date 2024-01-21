import { StepOneHeader } from "./header";
import { useContext } from "react";
import { CustomInputWrapper } from "./custom-input/wrapper";
import ClientContext from "../../context/client";
import FormContext from "../../context/form";

export function StepOne() {
  const { client, setClient } = useContext(ClientContext);
  const { register, errors } = useContext(FormContext);
  return (
    <div className="flex flex-col gap-4">
      <StepOneHeader />
      <div className="flex flex-col gap-3">
        <CustomInputWrapper
          label="Name"
          message={errors ? errors.name?.message?.toString() : undefined}
        >
          <input
            {...register("name")}
            value={client.name}
            onChange={(e) => {
              setClient({
                ...client,
                name: e.currentTarget.value,
              });
            }}
            className="rounded-md border border-neutral-CoolGray p-2 text-sm font-bold text-primary-MarineBlue placeholder-neutral-CoolGray placeholder:font-normal focus:border-primary-MarineBlue focus:ring-0"
            // className={`border text-sm placeholder-neutral-CoolGray ${
            //   missingValue && client.name === ""
            //     ? "border-primary-StrawberryRed focus:border-primary-StrawberryRed"
            //     : "border-neutral-CoolGray focus:border-primary-MarineBlue"
            // } rounded-md p-2 font-bold text-primary-MarineBlue placeholder:font-normal focus:ring-0`}
            type="text"
            placeholder="e.g. Stephen King"
          />
        </CustomInputWrapper>
        <CustomInputWrapper
          label="Email"
          message={errors ? errors.email?.message?.toString() : undefined}
        >
          <input
            {...register("email")}
            value={client.email}
            onChange={(e) => {
              setClient({
                ...client,
                email: e.currentTarget.value,
              });
            }}
            className="rounded-md border border-neutral-CoolGray p-2 text-sm font-bold text-primary-MarineBlue placeholder-neutral-CoolGray placeholder:font-normal focus:border-primary-MarineBlue focus:ring-0"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </CustomInputWrapper>
        <CustomInputWrapper
          label="Phone"
          message={errors ? errors.phone?.message?.toString() : undefined}
        >
          <input
            {...register("phone", { valueAsNumber: true })}
            onChange={(e) => {
              if (e.currentTarget.value) {
                setClient({
                  ...client,
                  phoneNumber: parseInt(e.currentTarget.value),
                });
              } else {
                setClient({
                  ...client,
                  phoneNumber: undefined,
                });
              }
            }}
            className="rounded-md border border-neutral-CoolGray p-2 text-sm font-bold text-primary-MarineBlue placeholder-neutral-CoolGray placeholder:font-normal focus:border-primary-MarineBlue focus:ring-0"
            type="number"
            placeholder="e.g. 123 456 789"
          />
        </CustomInputWrapper>
      </div>
    </div>
  );
}
