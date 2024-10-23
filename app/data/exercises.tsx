import React from "react";
import ConnectColumns from "@/app/ui/konspiracni-teorie/connect-columns";


const exercises = {
  "konspiracni-teorie": {
    id: 101,
    title: "Konspirační teorie",
    path: "/konspiracni-teorie",
    info: "Konspirační teorie jsou teorie, které vysvětlují situaci nebo sled okolností jako výsledek tajného plánu, většinou vedeného vlivnými a mocnými lidmi. Konspirační teorie staví na představě, že nám někdo (často stát) něco tají, čímž narušují důvěru ve stát a jeho instituce. Často se jim daří v obdobích nejistoty, což bylo zřetelné například během pandemie Covid-19.",
    task: "Teď, když víš, co jsou to konspirační teorie, je na čase ověřit tvou schopnost jejich rozpoznání. Následující cvičení obsahuje pět konspiračních teorií a pět pravdivých informací na totéž téma. Kliknutím a tažením myší spoj tvrzení, která spolu souvisí.",
    interactive: <ConnectColumns />,
  },
};

export default exercises;
