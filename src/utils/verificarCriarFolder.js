import RNFetchBlob from 'rn-fetch-blob'

async function verificarCriarFolder(folder){

   const existe = await RNFetchBlob.fs.exists(`${RNFetchBlob.fs.dirs.MusicDir}/${folder}`);
        
    if(existe === false){
       await RNFetchBlob.fs.mkdir(`${RNFetchBlob.fs.dirs.MusicDir}/${folder}`);

    }

    return existe;

}

export default verificarCriarFolder;