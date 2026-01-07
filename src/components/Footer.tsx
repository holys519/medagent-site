
export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MedAgent Project. All rights reserved.
          </p>
          <p className="mt-2 text-slate-600 text-xs">
            Built with React Native, Expo, and Google Cloud Platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
