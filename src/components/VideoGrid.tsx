import { VideoCard } from "@/components/VideoCard";

const VIDEOS = [
  {
    title: "Food tour of paahadh | Street Food of India",
    image: "photo.jpg",
    thumb_image: "thumbnail.jpg",
    author: "bhalla_ji Productions",
    views: "100k",
    timestamp: "10 days ago",
  },
  {
    title: "Food tour of Himachal | Street Food of India",
    image: "photo.jpg",
    thumb_image: "thumbnail.jpg",
    author: "bhalla_ji Productions",
    views: "100k",
    timestamp: "10 days ago",
  },
  {
    title: "Food tour of Delhi | Street Food of India",
    image: "photo.jpg",
    thumb_image: "thumbnail.jpg",
    author: "bhalla_ji Productions",
    views: "100k",
    timestamp: "10 days ago",
  },
];
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          {" "}
          <VideoCard
            title={video.title}
            image={video.image}
            thumb_image={video.thumb_image}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
      ;
    </div>
  );
};
