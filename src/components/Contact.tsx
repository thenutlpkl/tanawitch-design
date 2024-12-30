const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-card rounded-3xl p-12 relative overflow-hidden hologram-glow">
          <div className="relative z-10">
            <h2 className="text-4xl font-light mb-4">Want to connect?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Want to create something awesome or curious about your product? let's connect and dive in together
            </p>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary/20 backdrop-blur-sm px-8 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/30 border border-primary/20"
            >
              My LinkedIn
            </a>
          </div>
          <div className="absolute right-12 bottom-12 w-32 h-32 blur-3xl bg-primary/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;