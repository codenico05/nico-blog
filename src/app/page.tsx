import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Trending from '@/components/Trending';

export default function Home() {
  return (
    <main className="">
      <Header text="Code Nico" />
      <Trending />
    </main>
  );
}
