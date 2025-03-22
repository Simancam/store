"use client";

import React from "react";
import hoodies from "@/data/hoodies.json";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const InventoryTable: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Imagen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hoodies.map((hoodie) => (
            <TableRow key={hoodie.id}>
              <TableCell>{hoodie.id}</TableCell>
              <TableCell>{hoodie.name}</TableCell>
              <TableCell>${hoodie.price}</TableCell>
              <TableCell>
                <img
                  src={hoodie.image1}
                  alt={hoodie.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTable;
