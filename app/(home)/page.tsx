
import React from "react";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Search from "./_components/search";


export default function Home() {
  return (
    <div>
      <Header></Header>

    <div className="px-5 pt-5">

    <h2 className="text-xl font-bold"> Olá, Juan!!</h2>
      <p className="capitalize text-sn">
        {format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}
      </p>
    </div>

    <div className="px-5 mt-6">
    
    <Search/>

    </div>
    
    
    </div>
  );
}
