import { langToCode } from "./languages";

export const sampleUrls = {
    [langToCode.GERMAN]: 'https://www.dw.com/de/deutschland-und-corona-zieht-der-bundestag-bilanz/a-68734748',
    [langToCode.ENGLISH]: 'https://www.dw.com/en/israel-fires-officers-over-deadly-drone-attack-on-aid-convoy/a-68749008',
    [langToCode.RUSSIAN]: 'https://www.dw.com/ru/zapad-poobesal-armenii-mnogomillionnye-granty-i-investicii/a-68751753',
    // [langToCode.CHINESE]: 'zh',
    // [langToCode.CHINESE_TRADITIONAL]: 'zh-hant',
    [langToCode.PORTUGUESE_BRAZIL]: 'https://www.dw.com/pt-br/transi%C3%A7%C3%A3o-verde-eleva-pre%C3%A7os-do-cobre-e-impulsiona-furtos/a-68747211',
    [langToCode.ALBANIAN]: 'https://www.dw.com/sq/gjermani-n%C3%AB-ushtri-do-t%C3%AB-krijohet-nj%C3%AB-trup%C3%AB-kibernetike/a-68744979',
    [langToCode.AMHARIC]: 'https://www.dw.com/am/%E1%8B%A8%E1%8A%A2%E1%89%B5%E1%8B%AE%E1%8C%B5%E1%8B%AB-%E1%88%95%E1%8B%9D%E1%89%A5-%E1%88%88%E1%88%95%E1%8B%B3%E1%88%B4-%E1%8C%8D%E1%8B%B5%E1%89%A5-19-%E1%89%A2%E1%88%8A%E1%8B%AE%E1%8A%95-%E1%89%A5%E1%88%AD-%E1%88%9B%E1%8B%8B%E1%8C%A1%E1%8A%95-%E1%89%B0%E1%8A%90%E1%8C%88%E1%88%A8/a-68750548',
    [langToCode.ARABIC]: 'https://www.dw.com/ar/%D9%85%D8%AC%D9%84%D8%B3-%D8%AD%D9%82%D9%88%D9%82-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86-%D9%8A%D8%B7%D8%A7%D9%84%D8%A8-%D8%A8%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84-%D9%88%D9%88%D9%82%D9%81-%D8%A8%D9%8A%D8%B9%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D8%AD%D8%A9/a-68748573',
    [langToCode.BENGALI]: 'https://www.dw.com/bn/%E0%A6%95%E0%A7%87%E0%A6%8F%E0%A6%A8%E0%A6%8F%E0%A6%AB-%E0%A6%8F%E0%A6%B0-%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%B2%E0%A6%BE%E0%A7%9F-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A7%8D%E0%A6%A8%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%A7-%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%93-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BE/a-68753837',
    [langToCode.BOSNIAN]: 'https://www.dw.com/bs/orban-o-ordenu-rs-a-to-nije-obi%C4%8Dni-dr%C5%BEavni-akt/a-68745755',
    [langToCode.BULGARIAN]: 'https://www.dw.com/bg/domasno-nasilie-kak-edin-film-razbuni-duhovete-v-italia/a-68750812',
    [langToCode.DARI]: 'https://www.dw.com/fa-af/%D8%A7%D8%B3%D8%B1%D8%A7%D8%A6%DB%8C%D9%84-%D8%AF%D9%88-%D9%85%D8%B3%DB%8C%D8%B1-%D8%AC%D8%AF%DB%8C%D8%AF-%DA%A9%D9%85%DA%A9%D8%B1%D8%B3%D8%A7%D9%86%DB%8C-%D8%A8%D9%87-%D9%86%D9%88%D8%A7%D8%B1-%D8%BA%D8%B2%D9%87-%D8%A8%D8%A7%D8%B2-%D9%85%DB%8C%DA%A9%D9%86%D8%AF/a-68746944',
    [langToCode.FRENCH]: 'https://www.dw.com/fr/rwanda-g%C3%A9nocide-1944-ibuka-kigali/a-68753578',
    [langToCode.GREEK]: 'https://www.dw.com/el/%CF%81%CE%BF%CF%85%CE%AC%CE%BD%CF%84%CE%B1-%CE%B1%CF%80%CF%8C-%CF%84%CE%B7%CE%BD-%CE%B1%CF%80%CE%BF%CE%B9%CE%BA%CE%B9%CE%BF%CE%BA%CF%81%CE%B1%CF%84%CE%AF%CE%B1-%CF%83%CF%84%CE%B7-%CE%B3%CE%B5%CE%BD%CE%BF%CE%BA%CF%84%CE%BF%CE%BD%CE%AF%CE%B1/a-68721434',
    [langToCode.HAUSA]: 'https://www.dw.com/ha/shekaru-75-da-kafa-kungiyar-tsaro-ta-nato/a-68739834',
    [langToCode.HINDI]: 'https://www.dw.com/hi/india-election-will-kejriwal-arrest-boost-opposition/a-68746334',
    [langToCode.INDONESIAN]: 'https://www.dw.com/id/kenapa-hutan-penting-bagi-kelangsungan-hidup-di-bumi/a-68748980',
    [langToCode.KISWAHILI]: 'https://www.dw.com/sw/somalia-yamfukuza-balozi-wa-ethiopia-na-kufunga-ubalozi/a-68748572',
    [langToCode.CROATIAN]: 'https://www.dw.com/hr/stoltenberg-za-dw-nato-%C4%87e-nadi%C4%87i-razlike/a-68749527',
    [langToCode.MACEDONIAN]: 'https://www.dw.com/mk/taravari-ne-poveke-od-6-meseci-za-ustavnite-izmeni/a-68746735',
    [langToCode.PASHTO]: 'https://www.dw.com/ps/%D8%AF-%D9%BE%D8%A7%DA%A9%D8%B3%D8%AA%D8%A7%D9%86-%D8%AD%DA%A9%D9%88%D9%85%D8%AA-%D9%84%D9%87-%D9%BC%D9%8A-%D9%BC%D9%8A-%D9%BE%D9%8A-%D8%B3%D8%B1%D9%87-%D8%AF-%D8%AE%D8%A8%D8%B1%D9%88-%D9%87%DB%8C%DA%85-%D8%A7%D8%B1%D8%A7%D8%AF%D9%87-%D9%86%D9%87-%D9%84%D8%B1%D9%88/a-68748422',
    [langToCode.PERSIAN]: 'https://www.dw.com/fa-ir/%D8%AA%D8%B9%D8%B7%DB%8C%D9%84%DB%8C-%D9%85%D9%88%D9%82%D8%AA-%D8%B3%D9%81%D8%A7%D8%B1%D8%AA%D8%AE%D8%A7%D9%86%D9%87%D9%87%D8%A7%DB%8C-%D8%A7%D8%B3%D8%B1%D8%A7%D8%A6%DB%8C%D9%84-%D8%AF%D8%B1-%D9%BE%DB%8C-%D8%AA%D9%87%D8%AF%DB%8C%D8%AF%D8%A7%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/a-68747328',
    [langToCode.POLISH]: 'https://www.dw.com/pl/raport-europolu-w-ue-dzia%C5%82a-ponad-800-grup-przest%C4%99pczych/a-68753692',
    [langToCode.PORTUGUESE_AFRICA]: 'https://www.dw.com/pt-002/chissano-diz-que-debate-sobre-candidato-da-frelimo-precisa-de-impulsos/a-68749000',
    [langToCode.ROMANIAN]: 'https://www.dw.com/ro/scholz-la-bucure%C8%99ti-bani-europeni-%C3%AEn-%C8%99i-tehnologie-german%C4%83-industria-militar%C4%83-a-rom%C3%A2niei/a-68748003',
    [langToCode.SERBIAN]: 'https://www.dw.com/sr/izrael-najavio-pove%C4%87anje-dostave-pomo%C4%87i-za-gazu/a-68749292',
    [langToCode.SPANISH]: 'https://www.dw.com/es/m%C3%A9xico-concede-asilo-pol%C3%ADtico-a-exvicepresidente-ecuatoriano-acusado-de-corrupci%C3%B3n/a-68754381',
    [langToCode.TURKISH]: 'https://www.dw.com/tr/miro%C4%9Flu-akpyi-stat%C3%BCko-anlay%C4%B1%C5%9F%C4%B1-i%C3%A7inde-tutmak-isteyenler-var/a-68752089',
    [langToCode.UKRANIAN]: 'https://www.dw.com/uk/ne-lise-morozovsk-ukraina-urazila-se-tri-vijskovi-aerodromi-rf/a-68753909',
    [langToCode.URDU]: 'https://www.dw.com/ur/%D8%BA%D8%B2%DB%81-%D9%85%DB%8C%DA%BA-%D8%A7%DB%81%D8%AF%D8%A7%D9%81-%DA%A9%D9%88-%D9%86%D8%B4%D8%A7%D9%86%DB%81-%D8%A8%D9%86%D8%A7%D9%86%DB%92-%DA%A9%DB%92-%D9%84%DB%8C%DB%92-%D8%A7%DB%92-%D8%A7%D9%93%D8%A6%DB%8C-%DA%A9%D8%A7-%D8%A7%D8%B3%D8%AA%D8%B9%D9%85%D8%A7%D9%84-%D8%AA%D8%B4%D9%88%DB%8C%D8%B4%D9%86%D8%A7%DA%A9-%DB%81%DB%92-%DA%AF%D9%88%D9%B9%DB%8C%D8%B1%D8%B4/a-68753322',
}