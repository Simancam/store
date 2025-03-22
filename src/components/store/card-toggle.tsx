"use client"

import { useState } from "react";
import { useCardStore } from "@/hooks/cardStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, CreditCard } from "lucide-react";

export function CardToggle() {
  const [open, setOpen] = useState(false);
  const { cartItems, removeItem, clearCart } = useCardStore();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setOpen(true)} 
        className="relative hover:scale-105 transition-transform"
      >
        <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in">
            {cartItems.length}
          </span>
        )}
        <span className="sr-only">Open cart</span>
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full sm:max-w-lg">
          <SheetHeader className="space-y-2.5">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrito de Compras
            </SheetTitle>
            <Separator />
          </SheetHeader>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[70vh] space-y-4 text-muted-foreground">
              <ShoppingCart className="w-12 h-12" />
              <p className="text-lg font-medium">Tu carrito está vacío.</p>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Seguir Comprando
              </Button>
            </div>
          ) : (
            <>
              <ScrollArea className="h-[55vh] pr-4 mt-4">
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex gap-4 p-4 rounded-lg bg-muted/50"
                    >
                      <div className="flex-1 space-y-1">
                        <h3 className="font-medium leading-none">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeItem(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>

              <div className="mt-6 space-y-6">
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceder al Pago
                  </Button>
                  <Button 
                    className="w-full" 
                    variant="destructive" 
                    onClick={clearCart}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Vaciar Carrito
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}