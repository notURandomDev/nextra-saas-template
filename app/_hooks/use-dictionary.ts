"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "../_dictionaries/i18n-config";
import zhDictionary from "../_dictionaries/zh";
import enDictionary from "../_dictionaries/en";
import esDictionary from "../_dictionaries/es";

const dictionaries = {
  zh: zhDictionary as Dictionary,
  en: enDictionary as Dictionary,
  es: esDictionary as Dictionary,
} as const;

export const useDictionary = () => {
  const params = useParams();
  const lang = (params?.lang as string) || "zh";
  const [dictionary, setDictionary] = useState<Dictionary>(
    () => dictionaries[lang as "zh" | "en" | "es"] ?? dictionaries.zh,
  );

  useEffect(() => {
    setDictionary(dictionaries[lang as "zh" | "en" | "es"] ?? dictionaries.zh);
  }, [lang]);

  return { lang, dictionary };
};
