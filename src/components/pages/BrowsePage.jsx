import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MdFavorite } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function BrowsePage() {
  const radioStations = useLoaderData();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (url) => {
    console.log("helloe from herer");
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.src = url;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <Table>
        <TableBody>
          {radioStations.map((station) => (
            <Link
              key={station.id}
              onClick={() => handlePlayPause(station.streamUrl)}
            >
              <TableRow className="flex justify-between">
                <TableCell>
                  <img src="" alt="" />
                  {station.name}
                </TableCell>
                <TableCell>
                  <button>
                    <MdFavorite size={25} />
                  </button>
                </TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
      <audio ref={audioRef} controls hidden />
    </>
  );
}
