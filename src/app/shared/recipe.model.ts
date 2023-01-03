export class Recipe {
  public name: string;
  public description: string;
  public imagedata: string;
  constructor(name: string, dec: string, imagedata: string) {
    this.name = name;
    this.description = dec;
    this.imagedata = imagedata;
  }
}
