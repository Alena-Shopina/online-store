import lamp1 from "../assets/img/tovar_1.webp";
import lamp2 from "../assets/img/tovar_3.webp";
import lamp3 from "../assets/img/tovar_2.jpg";
import lamp4 from "../assets/img/Lamp_1.jpg";
import lamp5 from "../assets/img/Lamp_5.avif";
import lamp6 from "../assets/img/Lamp_6.webp";

const products = [
  {
    id: 1,
    title: "RGB lamp 1",
    description:
      "Світлодіодна лампа з Wi-Fi керуванням, підтримкою RGB та димуванням.",
    price: 1500,
    image: lamp1,
    features: {
      overview:
        "Ця розумна лампа дозволяє керувати освітленням через мобільний додаток, змінювати кольори та яскравість, а також налаштовувати розклад увімкнення/вимкнення.",
      specifications: {
        Потужність: "9 Вт",
        Цоколь: "E27",
        "Світловий потік": "900 Лм",
        "Кут світіння": "270°",
        "Колірна температура": "4000K + RGB",
        "Термін служби": "30 000 годин",
        Керування: "Wi-Fi через додаток Smart Life",
        "Додаткові функції": "Музичний режим, таймер, 16 млн кольорів",
      },
      packageContents: ["Розумна лампа A1", "Інструкція користувача"],
    },
  },
  {
    id: 2,
    title: "RGB lamp 2",
    description:
      "Багатофункціональна лампа з підтримкою голосових помічників та широким діапазоном кольорів.",
    price: 2200,
    image: lamp2,
    features: {
      overview:
        "Лампа B2 підтримує керування через Alexa та Google Assistant, має широкий діапазон кольорів та можливість налаштування сценаріїв освітлення.",
      specifications: {
        Потужність: "8,7 Вт",
        Цоколь: "E27",
        "Світловий потік": "806 Лм",
        "Кут світіння": "220°",
        "Колірна температура": "2500–6500K",
        "Термін служби": "15 000 годин",
        Керування: "Wi-Fi через додаток Tapo",
        "Додаткові функції": "Голосове керування, таймер, сценарії освітлення",
      },
      packageContents: ["Розумна лампа B2", "Керівництво користувача"],
    },
  },
  {
    id: 3,
    title: "RGB lamp 3",
    description:
      "Енергоефективна лампа з матовим покриттям та розумними функціями.",
    price: 2700,
    image: lamp3,
    features: {
      overview:
        "Підтримка Alexa та Google Home, адаптація яскравості та кольору під час доби.",
      specifications: {
        Потужність: "10 Вт",
        Цоколь: "E26",
        "Світловий потік": "1000 Лм",
        "Кут світіння": "240°",
        "Колірна температура": "2700–6500K",
        "Термін служби": "25 000 годин",
        Керування: "Bluetooth/Wi-Fi",
        "Додаткові функції": "Сумісність із мобільними застосунками",
      },
      packageContents: ["Лампа C3", "Інструкція"],
    },
  },
  {
    id: 4,
    title: "RGB lamp 4",
    description: "Сучасна торшерна лампа з кольоровою стрічкою.",
    price: 2500,
    image: lamp4,
    features: {
      overview: "Ідеально для створення атмосфери у вітальні або студії.",
      specifications: {
        Потужність: "12 Вт",
        Цоколь: "Інтегрований",
        "Світловий потік": "950 Лм",
        "Кут світіння": "360°",
        "Колірна температура": "3000–6000K",
        "Термін служби": "40 000 годин",
        Керування: "Пульт та додаток",
        "Додаткові функції": "Музичний режим, RGB, ефекти переходу",
      },
      packageContents: ["Лампа D4", "Пульт", "Інструкція"],
    },
  },
  {
    id: 5,
    title: "RGB lamp 5",
    description: "Компактна нічна лампа з RGB підсвіткою.",
    price: 2200,
    image: lamp5,
    features: {
      overview: "Ідеально підходить для дитячої кімнати або спальні.",
      specifications: {
        Потужність: "5 Вт",
        Цоколь: "USB зарядка",
        "Світловий потік": "300 Лм",
        "Кут світіння": "180°",
        "Колірна температура": "RGB",
        "Термін служби": "20 000 годин",
        Керування: "Сенсорна панель",
        "Додаткові функції": "Регулювання яскравості, нічний режим",
      },
      packageContents: ["Нічник E5", "Кабель USB", "Керівництво"],
    },
  },
  {
    id: 6,
    title: "RGB lamp 6",
    description:
      "Преміум лампа для студійного освітлення з багатим функціоналом.",
    price: 2700,
    image: lamp6,
    features: {
      overview:
        "Налаштування за допомогою мобільного додатку, підтримка сценічного освітлення.",
      specifications: {
        Потужність: "15 Вт",
        Цоколь: "Інтегрований",
        "Світловий потік": "1200 Лм",
        "Кут світіння": "360°",
        "Колірна температура": "2700–7000K",
        "Термін служби": "50 000 годин",
        Керування: "Wi-Fi та Bluetooth",
        "Додаткові функції": "Гнучке керування сценаріями, ефекти переходу",
      },
      packageContents: ["Лампа F6", "Кабель живлення", "Інструкція"],
    },
  },
  {
    id: 7,
    title: "RGB lamp 7",
    description: "Настільна лампа з сенсорним керуванням та RGB освітленням.",
    price: 2500,
    image: lamp3,
    features: {
      overview: "Зручне сенсорне керування та регулювання яскравості.",
      specifications: {
        Потужність: "7 Вт",
        Цоколь: "Інтегрований",
        "Світловий потік": "600 Лм",
        "Кут світіння": "200°",
        "Колірна температура": "3000–6000K",
        "Термін служби": "20 000 годин",
        Керування: "Сенсор",
        "Додаткові функції": "RGB підсвітка, нічний режим",
      },
      packageContents: ["Лампа G7", "Інструкція"],
    },
  },
  {
    id: 8,
    title: "RGB lamp 8",
    description: "Декоративна лампа у формі неону з можливістю зміни кольору.",
    price: 2200,
    image: lamp1,
    features: {
      overview: "Підходить для вечірок, фотозон або як арт-елемент.",
      specifications: {
        Потужність: "6 Вт",
        Цоколь: "Інтегрований",
        "Світловий потік": "500 Лм",
        "Кут світіння": "360°",
        "Колірна температура": "RGB",
        "Термін служби": "25 000 годин",
        Керування: "Пульт",
        "Додаткові функції": "16 млн кольорів, змінні ефекти",
      },
      packageContents: ["Лампа H8", "Пульт", "Кріплення"],
    },
  },
  {
    id: 9,
    title: "RGB lamp 9",
    description: "Смарт-лампа для робочого столу з природним світлом.",
    price: 2700,
    image: lamp5,
    features: {
      overview: "Підвищує концентрацію, зменшує навантаження на очі.",
      specifications: {
        Потужність: "9 Вт",
        Цоколь: "USB",
        "Світловий потік": "850 Лм",
        "Кут світіння": "180°",
        "Колірна температура": "4000K",
        "Термін служби": "30 000 годин",
        Керування: "Сенсор або додаток",
        "Додаткові функції": "Автоматичне затемнення",
      },
      packageContents: ["Лампа I9", "Кабель USB", "Інструкція"],
    },
  },
  {
    id: 10,
    title: "RGB lamp 10",
    description: "Універсальна LED лампа для будь-яких інтер'єрів.",
    price: 1500,
    image: lamp4,
    features: {
      overview: "Простий мінімалістичний дизайн, керування зі смартфону.",
      specifications: {
        Потужність: "10 Вт",
        Цоколь: "E27",
        "Світловий потік": "1000 Лм",
        "Кут світіння": "250°",
        "Колірна температура": "3000–6000K",
        "Термін служби": "35 000 годин",
        Керування: "Додаток + голосове",
        "Додаткові функції": "Режим нічника, сцени освітлення",
      },
      packageContents: ["Лампа J10", "Інструкція"],
    },
  },
  {
    id: 11,
    title: "RGB lamp 11",
    description: "Інноваційна лампа з підтримкою динамічного RGB ефекту.",
    price: 2200,
    image: lamp6,
    features: {
      overview: "RGB ефекти з плавними переходами та інтерактивними режимами.",
      specifications: {
        Потужність: "11 Вт",
        Цоколь: "E27",
        "Світловий потік": "1100 Лм",
        "Кут світіння": "270°",
        "Колірна температура": "RGB",
        "Термін служби": "30 000 годин",
        Керування: "Додаток, пульт",
        "Додаткові функції": "Інтерактивні сцени, таймер",
      },
      packageContents: ["Лампа K11", "Пульт", "Керівництво"],
    },
  },
  {
    id: 12,
    title: "RGB lamp 12",
    description: "Розумна лампа для освітлення кімнати із зміною атмосфери.",
    price: 2700,
    image: lamp3,
    features: {
      overview: "Вибір кольору та яскравості в залежності від настрою.",
      specifications: {
        Потужність: "10 Вт",
        Цоколь: "E27",
        "Світловий потік": "1000 Лм",
        "Кут світіння": "270°",
        "Колірна температура": "2700–6500K + RGB",
        "Термін служби": "40 000 годин",
        Керування: "Wi-Fi, голосове",
        "Додаткові функції": "Музичний режим, сцени",
      },
      packageContents: ["Лампа L12", "Кабель", "Інструкція"],
    },
  },
];

export default products;
