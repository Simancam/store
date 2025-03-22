"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, DollarSign, SquarePlus} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import useAddProductForm from "@/hooks/useAddProductForm";

interface AddProductFormProps {
  className?: string;
  onSuccess?: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ className, onSuccess }) => {
  const { formData, handleChange, handleSubmit } = useAddProductForm();

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    onSuccess?.();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    let processedValue: string | number = value;
    
    // Handle number inputs
    if (type === 'number') {
      processedValue = value === '' ? '' : Number(value);
    }
    
    handleChange({ target: { name, value: processedValue } } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={`space-y-6 ${className || ''}`}>
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div>
          <div className="flex items-center space-x-2">
            <SquarePlus className="h-6 w-6 text-muted-foreground" />
            <h1 className="text-2xl font-semibold tracking-tight">Añadir Producto</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button type="submit" form="product-form" size="sm">
            Guardar Producto
          </Button>
        </div>
      </div>

      <Separator />

      <Card className="border-none shadow-none">
        <CardContent className="p-6">
          <form id="product-form" onSubmit={onFormSubmit} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nombre del Producto
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ej: Camiseta de Algodón"
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium">
                  Precio
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="pl-10"
                    required
                    min="0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image1" className="text-sm font-medium">
                  Imagen Principal
                </Label>
                <div className="relative">
                  <ImagePlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <Input
                    id="image1"
                    name="image1"
                    value={formData.image1}
                    onChange={handleInputChange}
                    placeholder="URL de la imagen"
                    className="pl-10"
                    required
                    type="file"
                    pattern="https?://.+"
                    title="Ingrese una URL válida que comience con http:// o https://"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image2" className="text-sm font-medium">
                  Imagen Secundaria
                </Label>
                <div className="relative">
                  <ImagePlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <Input
                    id="image2"
                    name="image2"
                    value={formData.image2}
                    onChange={handleInputChange}
                    placeholder="URL de la imagen"
                    className="pl-10"
                    required
                    type="file"
                    pattern="https?://.+"
                    title="Ingrese una URL válida que comience con http:// o https://"
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductForm;