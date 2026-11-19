import { useSearchParams } from 'react-router-dom';
import Form from '../components/Form';

// Keyed by ?topic= so following e.g. "Book a show" while already on /contact
// re-selects the right topic.
const Contact = () => {
  const [searchParams] = useSearchParams();
  return <Form key={searchParams.get('topic') || 'general'} />;
};

export default Contact;
