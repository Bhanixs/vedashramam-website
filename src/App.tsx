import TermsPage from "@/pages/Terms";
import PrivacyPage from "@/pages/Privacy";
import CancellationPage from "@/pages/Cancellation";

export { TermsPage as Terms, PrivacyPage as Privacy, CancellationPage as Cancellation };

/**
 * Vedashrama Gurukulam Route Registry Reference:
 * - /terms -> <Terms />
 * - /privacy -> <Privacy />
 * - /cancellation -> <Cancellation />
 */
export const routes = [
  { path: "/terms", element: TermsPage },
  { path: "/privacy", element: PrivacyPage },
  { path: "/cancellation", element: CancellationPage },
];

export default function App() {
  return null;
}
