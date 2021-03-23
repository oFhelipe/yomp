async function downloadSong() {
    if(link !== ""){

      const { videoDetails } = await ytdl.getInfo(link);

      const urls = await ytdl(link, { 
        quality: 'highestaudio',
        filter: 'audioonly' 
      });

      RNFetchBlob
          .config({
          fileCache : true,
          path: `${RNFetchBlob.fs.dirs.MusicDir}/yomp/Steven Universe/${videoDetails.title}.mp3`,
          addAndroidDownloads : {
            notification : true,
            title : 'Musica baixada com sucesso! :3',
            description : 'Sua musica está aqui!',
            mime : 'sound/mp3',
            mediaScannable : true,
          }})
          .fetch('GET', urls[0].url);
    }
}