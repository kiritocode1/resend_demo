import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import * as handlebars from "handlebars";
import { MusicTempelate } from "./tempelates/musictempelate";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function compileMusicTempelate (place: string, url: string) {


  const template = await  handlebars.compile(MusicTempelate);


  const htmlBody =  await  template({ place: place, url: url });

  return htmlBody;
}