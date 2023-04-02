import { Fragment } from "react";
import { useState, useEffect } from "react";
import Binural from "./binural";
import './Music.css';

function Music() {
  const [player, setPlayer] = useState(false);
  // const [musicType, setMusicType] = useState();
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  const buttonHandler =  name => {
    if(name === "binaural") {
      setSongs([
        {
          title: "Simply Meditation",
          artist: "Binural Beats",
          img_src: "https://t4.ftcdn.net/jpg/00/89/33/81/240_F_89338153_PoLsm4q4UlUV1Y8E6wjtazm935sww6LB.jpg",
          src: "./BinauralMusic/simply-meditation-series-11hz-alpha-binaural-waves-for-relaxed-focus-8028.mp3",
        },
        {
          title: "Tibetan Indian Meditation",
          artist: "Ashot-Danielyan-Composer",
          img_src: "https://t4.ftcdn.net/jpg/05/46/23/69/240_F_546236904_COe0Xy6d1eePiBIvjTKDEcbfaTxgzB9u.jpg",
          src: "./BinauralMusic/tibetan-indian-meditation-115567.mp3",
        },
        {
          title: "Magical Deep Meditation",
          artist: "Ashot-Danielyan-Composer",
          img_src: "https://t4.ftcdn.net/jpg/04/56/95/95/240_F_456959510_DtZckryv0ekt8Wk1YFfxaUBWmoi44rda.jpg",
          src: "./BinauralMusic/magical-deep-meditation-116793.mp3",
        },
        {
          title: "Underwater Deep Meditation",
          artist: "Ashot-Danielyan-Composer",
          img_src: "https://t3.ftcdn.net/jpg/00/97/55/56/240_F_97555673_XPNRxEmo5Ngd0XKryG1hipj8ofwe3ZqQ.jpg",
          src: "./BinauralMusic/underwater-deep-meditation-116797.mp3",
        },
      ])
    }
    if(name === 'mantras') {
      setSongs([
        {
          title: "Hare Krishna Mantra",
          artist: "HDG A C Bhaktivedant Swami Prabhupada",
          img_src: "http://www.founderacharya.com/wp-content/uploads/2014/08/prabhupada-804x1024.jpg",
          src: "https://audio.iskcondesiretree.com/01_-_Srila_Prabhupada/02_-_Bhajans/Vol-01/02_-_Hare_Krsna_Classics_and_Originals/SP_Bhajans_04_-_Hare_Krsna_Maha_Mantra.mp3",
        },
        {
          title: "Govindam Adi Pursam",
          artist: "Yamuna Mata ji",
          img_src: "https://i1.sndcdn.com/avatars-000058210493-53jsg3-t500x500.jpg",
          src: "https://audio.iskcondesiretree.com/04_-_ISKCON_Matajis/Her_Grace_Yamuna_Mataji/Bhajans/YM_Bhajans_-_Govindam_Adi_Purusam-Original.mp3",
        },
        {
          title: "Govind Jai Jai",
          artist: "Yamuna Mata ji",
          img_src: "https://w0.peakpx.com/wallpaper/480/995/HD-wallpaper-lord-krishna-bhagwan-krishna-lord-shree-thumbnail.jpg",
          src: "https://audio.iskcondesiretree.com/04_-_ISKCON_Matajis/Her_Grace_Yamuna_Mataji/Bhajans/YM_Bhajans_-_Govinda_Jai_Jai.mp3",
        },
        {
          title: "Krishna Meditation",
          artist: "Yamuna Mata ji",
          img_src: "https://w0.peakpx.com/wallpaper/480/995/HD-wallpaper-lord-krishna-bhagwan-krishna-lord-shree-thumbnail.jpg",
          src: "https://audio.iskcondesiretree.com/04_-_ISKCON_Matajis/Her_Grace_Yamuna_Mataji/Bhajans/YM_Bhajans_-_Hare_Krishna_Kirtan_-_Delhi.mp3",
        },
        {
          title: "Omkar",
          artist: "Omkar",
          img_src: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Om-Symbol-Golden-hd-Wallpaper.jpg",
          src: "./BinauralMusic/bhajan1.mp3",
        },
        {
          title: "Om Namah Shivay",
          artist: "Omkar",
          img_src: "https://www.bhagwanphoto.com/wp-content/uploads/2020/02/Lord-Shiva-Bhagwan-Ji-Images-Free-Download-with-Wallpaper.jpg",
          src: "./BinauralMusic/bhajan7.mp3",
        },
        {
          title: "Om Namo Bhagawate",
          artist: "Omkar",
          img_src: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Om-Symbol-Golden-hd-Wallpaper.jpg",
          src: "./BinauralMusic/bhajan5.mp3",
        },
      ])
    }
    setPlayer(true);
  }

  return (
    <div className="App">
      
      {!player && (
        <div className="categoryContainer">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/6206088de5b0708e27001c97/6394eea1831ce26d9ba448ad_binaural-beats.png"
              alt="binaural"
            /> <br/>
            <button name="binaural" onClick={e => buttonHandler(e.target.name)}>Binaural Beats</button>
          </div>
          <div>
            <img
              src="https://www.108.house/wp-content/uploads/2021/11/imagen-blog-saty-mantras-1024x711.jpeg"
              alt="mantras"
            /> <br/>
            <button name="mantras" onClick={e => buttonHandler(e.target.name)}>Mantras</button>
          </div>
        </div>
      )}
      {player && (
        <Binural
         setPlayer={setPlayer}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      )}
    </div>
  );
}

export default Music;
