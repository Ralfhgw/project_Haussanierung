declare global {
  interface Window {
    dcodeIO: {
      bcrypt: {
        compare(password: string, hash: string): Promise<boolean>
      }
    }
  }
}

export {}
