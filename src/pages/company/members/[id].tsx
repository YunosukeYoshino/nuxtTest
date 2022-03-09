import { useRouter } from 'next/router';
import Button from '@/components/button';
const Member = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Member Id: {id}</p>;
};

export default Member;
