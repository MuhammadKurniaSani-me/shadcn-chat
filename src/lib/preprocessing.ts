const {
    TokenizerId,
    NormalizerId,
    StopwordsId,
    StemmerId,
} = require("@nlpjs/lang-id");

function normalize(txt:string): string{
    const normalizer = new NormalizerId()
    return normalizer.normalize(txt);
}

function tokenize(txt:string):string[] {
    const tokenizer = new TokenizerId()
    return tokenizer.tokenize(txt);
}

function removeStopwords(txt:string[]):string[] {
    const stopwords = new StopwordsId()
    return stopwords.removeStopwords(txt);
}

function stem(txt:string[]):string[] {
    const stemmer = new StemmerId()
    return stemmer.stem(txt);
}

export default function preprocess(txt: string): string[]{
    return stem(removeStopwords(tokenize(normalize(txt))))
}
