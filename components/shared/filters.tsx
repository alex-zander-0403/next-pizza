import React from "react";
import { Title, FilterCheckbox, RangeSlider, CheckboxFilteredGroup } from ".";
import { Input } from "../ui";

interface Props {
  className?: string;
}

//
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className="className">
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-200 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* Ингридиенты чекбоксы */}
      <div>
        <CheckboxFilteredGroup
          title="Ингридиенты:"
          className="mt-5"
          limit={5}
          defaultItems={[
            { text: "cheese", value: "1" },
            { text: "tomato", value: "2" },
            { text: "onion", value: "3" },
            { text: "cheese", value: "4" },
            { text: "tomato", value: "5" },
            { text: "onion", value: "6" },
            { text: "cheese", value: "7" },
            { text: "tomato", value: "8" },
            { text: "onion", value: "9" },
          ]}
          items={[
            { text: "cheese", value: "1" },
            { text: "tomato", value: "2" },
            { text: "onion", value: "3" },
            { text: "cheese", value: "4" },
            { text: "tomato", value: "5" },
            { text: "onion", value: "6" },
            { text: "cheese", value: "7" },
            { text: "tomato", value: "8" },
            { text: "onion", value: "9" },
          ]}
        />
      </div>
    </div>
  );
};
