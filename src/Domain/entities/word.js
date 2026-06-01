export class Word {
   constructor(id, word, role, BrE, AmE, definition, examples) {
      this.id = id;
      this.word = word;
      this.role = role;
      this.BrE = BrE;
      this.AmE = AmE;
      this.definition = definition;
      this.examples = examples;
   }

   static checkWordObject(data) {
      if (!data || typeof data !== "object") {
         throw new Error("Invalid word: not an object");
      }

      const { id, word, role, BrE, AmE, definition, examples } = data;

      if (!id) {
         throw new Error("Missing Id: Id Key is missing in this object!");
      }

      if (role.trim().length === 0) {
         throw new Error("Invalid Id: Id cannot be empty!");
      }

      if (typeof id !== "number") {
         throw new Error("Invalid Id: id must be a number!");
      }
      
      if (!role) {
         throw new Error("Missing Role: Role Key is missing in this object!")
      }

      if (role.trim().length === 0) {
         throw new Error("Invalid Role: Role cannot be empty!");
      }

      if (typeof role !== "string") {
         throw new Error("Invalid Role: role must be a string!");
      }
      
      if (!word) {
         throw new Error("Missing Word: Word Key is missing in this object!")
      }

      if (word.trim().length === 0) {
         throw new Error("Invalid Word: Word cannot be empty!");
      }

      if (typeof word !== "string") {
         throw new Error("Invalid Word: word must be a string!");
      }
      
      if (!AmE) {
         throw new Error("Missing AmE: AmE Key is missing in this object!")
      }

      if (AmE.trim().length === 0) {
         throw new Error("Invalid AmE: AmE cannot be empty!");
      }

      if (typeof AmE !== "string") {
         throw new Error("Invalid AmE: AmE must be a string!");
      }
      
      if (!BrE) {
         throw new Error("Missing BrE: BrE Key is missing in this object!")
      }

      if (BrE.trim().length === 0) {
         throw new Error("Invalid BrE: BrE cannot be empty!");
      }

      if (typeof BrE !== "string") {
         throw new Error("Invalid BrE: BrE must be a string!");
      }
      
      if (!definition) {
         throw new Error("Missing Definition: Definition Key is missing in this object!")
      }

      if (definition.trim().length === 0) {
         throw new Error("Invalid Definition: Definition cannot be empty!");
      }

      if (typeof definition !== "string") {
         throw new Error("Invalid Definition: Definition must be a string!");
      }

      if (!examples) {
         throw new Error("Missing Examples: Examples array is missing in this object!");
      }

      if (!Array.isArray(examples)) {
         throw new Error("Invalid Examples: Examples must be an array!");
      }

      if (examples.length !== 3) {
         throw new Error("Invalid Examples: Examples array must have exactly 3 sentences!");
      }
   
      for (const example of examples) {
          if (typeof example !== "string" || example.trim().length === 0) {
              throw new Error("Invalid Examples: Each example must be a non-empty string!");
          }
      }

      return new Word(id, word, role, BrE, AmE, definition, examples);
   }

   static checkDataArray(dataArray) {
      if (!Array.isArray(dataArray)) {
         throw new Error("Expected an array from backend");
      }

      const results = dataArray.map((item, index) => {
         try {
            const wordInstance = Word.checkWordObject(item);
            return { status: 'valid', index, word: wordInstance };

         } catch (err) {
            return { status: 'invalid', index, error: err.message, raw: item };
         }
      });

      const validWords = results.filter(r => r.status === 'valid').map(r => r.word);

      const invalidWords = results.filter(r => r.status === 'invalid').map(r => ({
         index: r.index,
         message: r.error,
         data: r.raw,
      }));

      return { validWords, invalidWords };
   }
}
