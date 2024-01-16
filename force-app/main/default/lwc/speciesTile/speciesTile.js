import { LightningElement } from "lwc";

export default class SpeciesTile extends LightningElement {
  // especie (Objeto -> variable de instancia o propiedad)
  specie = {
    Name: "Aloe",
    Description: "Grandiosa para el cuidado de la piel",
    Image_URL_c:
      "https://www.shutterstock.com/es/image-photo/aloe-vera-sliced-gel-dripping-isolated-2162658879",
    Location__c: "Outdoors"
  };
}
