import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MdFavorite } from "react-icons/md";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function FavoritesPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = (url) => {
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
    <Table>
      <TableBody>
        <TableRow className="flex justify-between">
          <TableCell>INV001</TableCell>
          <TableCell>
            <button
              onClick={() =>
                handlePlayPause("https://stream-151.zeno.fm/h527zwd11uquv")
              }
            >
              <MdFavorite size={25} />
            </button>
          </TableCell>
        </TableRow>
      </TableBody>

      <audio ref={audioRef} controls />
      <Toaster />
    </Table>
  );
}
