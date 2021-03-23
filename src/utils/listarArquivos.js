import RNFetchBlob from 'rn-fetch-blob'

async function listarArquivos(folder){

    const arquivos = await RNFetchBlob.fs.ls(`${RNFetchBlob.fs.dirs.MusicDir}/yomp/${folder}`);

    return arquivos;
}

export default listarArquivos;