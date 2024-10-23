import React from "react";
import ConnectColumns from "@/app/ui/konspiracni-teorie/connect-columns";

const exercises = {
  dezinformace: {
    id: 10,
    title: "Dezinformace",
    path: "/dezinformace",
    info: "Dezinformace jsou jedním ze tří typů Informačních poruch. Informačními poruchami nazýváme informační chaos, který vzniká šířením nepravdivých nebo zkreslených zpráv. Informační poruchy dělíme do tří kategorií podle pravdivosti a záměru, se kterým jsou šířeny:",
    task: "Podívej se na následující scénář. Tři přátelé, Míša, Mája a Marek, povídají své kamarádce Miladě o novém filmu, který právě vyšel. Kliknutím na jeden z pojmů si projdi, jak by jednotlivé informační poruchy mohly vypadat ve skutečném světě. Až budeš chtít, kliknutím na tlačítko Pokračovat se posuň v úkolu dál.",
    interactive: <></>,
    sources: [
      {
        id: 1,
        text: "Claire Wardle, The Need for Smarter Definitions and Practical, Timely Empirical Research on Information Disorder",
        url: "https://doi.org/10.1080/21670811.2018.1502047",
      },
      {
        id: 2,
        text: "Ministerstvo vnitra ČR, Definice dezinformací a propagandy",
        url: "https://www.mvcr.cz/chh/clanek/definice-dezinformaci-a-propagandy.aspx",
      },
    ],
  },
  "konspiracni-teorie": {
    id: 101,
    title: "Konspirační teorie",
    path: "/konspiracni-teorie",
    info: "Konspirační teorie jsou teorie, které vysvětlují situaci nebo sled okolností jako výsledek tajného plánu, většinou vedeného vlivnými a mocnými lidmi. Konspirační teorie staví na představě, že nám někdo (často stát) něco tají, čímž narušují důvěru ve stát a jeho instituce. Často se jim daří v obdobích nejistoty, což bylo zřetelné například během pandemie Covid-19.",
    task: "Teď, když víš, co jsou to konspirační teorie, je na čase ověřit tvou schopnost jejich rozpoznání. Následující cvičení obsahuje pět konspiračních teorií a pět pravdivých informací na totéž téma. Kliknutím a tažením myší spoj tvrzení, která spolu souvisí.",
    interactive: <ConnectColumns />,
    sources: [
      {
        id: 1,
        text: "Merriam-Webster Dictionary - Conspiracy Theory",
        url: "https://www.merriam-webster.com/dictionary/conspiracy%20theory",
      },
      {
        id: 2,
        text: "Encyclopædia Britannica - Conspiracy Theory",
        url: "https://www.britannica.com/topic/conspiracy-theory",
      },
      {
        id: 3,
        text: "European Commission - Identifying Conspiracy Theories",
        url: "https://commission.europa.eu/strategy-and-policy/coronavirus-response/fighting-disinformation/identifying-conspiracy-theories_en",
      },
    ],
  },
};

export default exercises;
