import { LightningElement } from "lwc";

export default class SpeciesTile extends LightningElement {
  // especie (Objeto -> variable de instancia o propiedad)
  specie = {
    Name: "Aloe",
    Description: "Grandiosa para el cuidado de la piel",
    Image_URL__c:
      "https://i.pinimg.com/564x/86/e4/04/86e404711d3b6c6b073d01b8a6df69f5.jpg",
    Location__c: "Outdoors"
  };
}
