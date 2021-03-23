import RNFetchBlob from 'rn-fetch-blob'

async function listarDetalheArquivo(folder){

   const arquivos = RNFetchBlob.fs.lstat(`${RNFetchBlob.fs.dirs.MusicDir}/yomp/albuns/${folder}`);

   return arquivos;
   
}

export default listarDetalheArquivo;