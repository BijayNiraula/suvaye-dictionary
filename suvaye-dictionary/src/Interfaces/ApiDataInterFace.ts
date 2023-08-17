export interface Phonetic {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }
  
  export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  }
  
  export interface License {
    name: string;
    url: string;
  }
  
 export interface ApiData {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
  }
  
  