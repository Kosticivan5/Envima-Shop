import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAriaInput from "@/components/form/TextAriaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";

import { createProductAction } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";

const CreateProductPage = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl tracking-wider py-4">Create Product</h2>
      <div className="border border-greyAccent rounded-md p-6">
        <FormContainer action={createProductAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue=""
              placeholder="product name"
            />
            <FormInput
              type="text"
              name="company"
              label="company "
              defaultValue=""
              placeholder="company name"
            />
            <PriceInput label="price ($)" />
            <ImageInput />
            <TextAriaInput className="md:col-span-2" />
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProductPage;
