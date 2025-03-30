// src/utils.ts
export const isJsonString = (str: string): boolean => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  
  export const parseJsonString = (str: string): Record<string, any> => {
    return JSON.parse(str);
  };