import { useRouter } from 'next/router';

export default function Workspace() {
  const router = useRouter();
  const { exam, subject, topic, questionCount } = router.query;

  return (
    <div>
      <div>exam: {exam}</div>
      <div>subject: {subject}</div>
      <div>topic: {topic}</div>
      <div>questionCount: {questionCount}</div>
    </div>
  );
}
