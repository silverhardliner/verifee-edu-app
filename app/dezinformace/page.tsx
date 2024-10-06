"use client";

import { Lexend_Exa } from "next/font/google";
import img_a from "@/public/images/1.0.a.PNG";
import img_b from "@/public/images/1.0.b.PNG";
import img_c from "@/public/images/1.0.c.PNG";
import "./styles.css";
import RowImage from "../ui/dezinformace/row-image";
import ClickListItem from "../ui/dezinformace/click-list-item";
import { useState } from "react";
import clsx from "clsx";

const lexend_exa = Lexend_Exa({ subsets: ["latin"], display: "swap" });

export default function Page() {
  const [diplayedImage, setDisplayedImage] = useState(0);

  const image_a = {
    img: img_a,
    alt: "img_a",
    title: "MISINFORMACE",
    detail:
      "Míša od kamaráda slyšel, že film je založen na skutečných událostech. Ve skutečnosti to tak ale není a film je čistou fikcí. Míša to ale neví a tuto informaci nadšeně sdílí s Miladou bez špatného úmyslu.",
    bubbleText:
      "Slyšel jsem od kamaráda, že je film založený na skutečných událostech.",
  };

  const image_b = {
    img: img_b,
    alt: "img_b",
    title: "DEZINFORMACE",
    detail:
      "Mája ví, že film není založený na skutečných událostech. Kdyby totiž skutečně zkontrolovala film jak tvrdí, tuto informaci by nenašla. Záměrně tím tedy zavádí a vědomě šíří lež.",
    bubbleText:
      "Vím, že je film podle skutečné události, byla jsem si to zkontrolovat na internetu.",
  };

  const image_c = {
    img: img_c,
    alt: "img_c",
    title: "MALINFORMACE",
    detail:
      "Marek má přístup k zákulisním detailům, které jsou sice pravdivé, ale jejich šíření a zvěřejňování by mohlo poškodit jak herce, tak produkci. Přesto neváhá tyto informace sdílet s někým dalším. Říká tak sice pravdu, ale jeho úmyslem je uškodit druhému.",
    bubbleText:
      "Byl jsem u natáčení toho filmu a mám nejen nelichotivou fotku hlavní herečky, ale ještě k tomu nějaké nahrávky z produkce. Ukážu ti to!",
  };

  const images = [image_b, image_a, image_c];

  const listItemDez = (
    <div>
      <b>Dezinformace: </b>nepravdivé zprávy šířené se zlým záměrem
      <div>(deepfakes, konspirační teorie, klasické fake news)</div>
    </div>
  );

  const listItemMis = (
    <div>
      <b>Misinformace: </b>nepravdivé zprávy šířené bez zlého záměru
      <div>
        (často vznikají nezáměrnou chybou, třeba chybným datem či výkladem dat
        nebo nepochopením satiry)
      </div>
    </div>
  );

  const listItemMal = (
    <div>
      <b>Malinformace: </b>pravdivé zprávy šířené se zlým záměrem
      <div>
        (často osobní info, klasicky sdílení cizích fotografií nebo trapných
        videí, ale i jiné)
      </div>
    </div>
  );

  const listItems = [listItemDez, listItemMis, listItemMal];

  return (
    <div>
      <div className={`text-5xl mb-4 ${lexend_exa.className}`}>
        Dezinformace
      </div>
      <p>
        Dezinformace jsou jedním ze tří typů Informačních poruch. Informačními
        poruchami nazýváme informační chaos, který vzniká šířením nepravdivých
        nebo zkreslených zpráv. Informační poruchy dělíme do tří kategorií podle
        pravdivosti a záměru, se kterým jsou šířeny:
      </p>
      <ul>
        {listItems.map((item, index) => {
          return (
            <ClickListItem
              displayedImage={diplayedImage}
              setDisplayedImage={setDisplayedImage}
              itemIndex={index}
              content={item}
            />
          );
        })}
      </ul>
      <p>
        Podívej se na následující scénář. Tři přátelé, Míša, Mája a Marek,
        povídají své kamarádce Miladě o novém filmu, který právě vyšel.
        Kliknutím na jeden z pojmů si projdi, jak by jednotlivé informační
        poruchy mohly vypadat ve skutečném světě. Až budeš chtít, kliknutím na
        tlačítko Pokračovat se posuň v úkolu dál.
      </p>
      <div className="border-solid border rounded-lg border-black my-10 flex w-full p-4">
        <RowImage content={images[diplayedImage]} />
      </div>
      <p>
        Ačkoli se často setkáte se všemi třemi typy informačních poruch, nás
        zajímají právě dezinformace, tedy lživé zprávy šířené se zlým záměrem.
        Takové zprávy přirozeně existovaly vždy - s rozšířením internetu jsou
        však stále častější a mají větší dopad.
      </p>
      <p>
        Dezinformace jsou mocným nástrojem - dokáží šířit nepravdy, ale také
        zasívat chaos, ve kterém zpochybňujeme vše, protože nevíme, čemu můžeme
        věřit. Mohou je šířit jednotlivci, často však přichází od nepřátelských
        států v rámci hybridní informační války. Dezinformátoři cíleně zatajují
        nebo falšují původ informací, které uvádí, protože tyto informace buď
        sami vymýšlí, nebo zkreslují tak, aby podporovaly jejich příběh.{" "}
      </p>
      <p>
        Podrobnější informace o tom, kdo dezinformace šíří a za jakým účelem a
        jak se jim bránit vám představí úkoly v této části cvičení. Nyní vám
        představíme několik základních pojmů, které s dezinformacemi souvisí a
        možná jste se s nimi již setkali.
      </p>
    </div>
  );
}
