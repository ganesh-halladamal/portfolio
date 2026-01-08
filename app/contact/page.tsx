export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:halladmalganesh@gmail.com" 
                className="text-primary hover:underline"
              >
                halladmalganesh@gmail.com
              </a>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+917022815741" 
                className="text-primary hover:underline"
              >
                +91 7022815741
              </a>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/ganesh-halladamal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/ganeshph_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Twitter
                </a>
                <a 
                  href="https://github.com/ganesh-halladamal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
