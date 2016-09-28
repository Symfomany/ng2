export interface Crud{

  get(id: number, nom?:string,prenom?:string):any;

  add(object: any);

  remove(id: number);

  update(id:number, property: any)

  set(object: any)

}