import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import Image from "next/image";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="bg-white relative w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <Image
              src={"/assets/home/play.svg"}
              width={36}
              height={36}
              alt=""
            />
          </button>
          <span className="text-lg font-primary">Assistir Vídeo</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={"https://youtube.com/shorts/USC76dW6YOM?si=DzhpITaj6rAwYV5H"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
