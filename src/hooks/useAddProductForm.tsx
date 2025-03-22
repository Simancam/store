import { useState } from "react";

export interface ProductFormData {
  name: string;
  price: string;
  image1: string;
  image2: string;
}

const useAddProductForm = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    image1: "",
    image2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const response = await fetch("/api/hoodies", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // const data = await response.json();
    // console.log("Respuesta del backend:", data);

    console.log("Datos del formulario:", formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useAddProductForm;
