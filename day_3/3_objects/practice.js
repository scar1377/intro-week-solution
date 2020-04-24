const country = {
  name: "Costa Rica",
  region: "Americas",
  population: 4890379,
  regionalBlocs: [
    {
      acronym: "CAIS",
      name: "Central American Integration System",
      otherAcronyms: ["SICA"],
      otherNames: ["Sistema de la Integración Centroamericana,"],
    },
  ],
  borders: ["NIC", "PAN"],
  capital: "San José",
  nativeName: "Costa Rica",
  timezones: ["UTC-06:00"],
};

checkThat(country.population).isEqualTo(FILL_ME_IN);

checkThat(country.regionalBlocs).isEqualTo(FILL_ME_IN);

checkThat(country.regionalBlocs[FILL_ME_IN].FILL_ME_IN).isEqualTo("Central American Integration System");

const tills = {
  till_1: {
    name: "Keith",
    customers: [{}, {}, {}],
  },
  till_2: [{}, {}, {}, {}, {}],
  till_3: [{}, {}, {}, {}],
};
