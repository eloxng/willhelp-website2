// This is your "page content object"
function HomePage() {
    return `
    <!-- HERO SECTION -->
    <section id="hero" class="flex flex-col items-center justify-center text-center py-20 bg-base-200">
      <img src="assets/logo.png" alt="Company Icon" class="w-20 h-20 mb-4">
      <h1 class="website-header-text text-4xl md:text-5xl font-extrabold mb-4">WILL HELP</h1>
      <p class="website-description-text text-lg md:text-xl max-w-xl">
        Will Help LLC provides reliable landscaping and property maintenance services you can count on. From yard cleanups and landscape care to snow and junk removal, we’re here to help keep your property clean, safe, and looking its best year-round.
      </p>
      <a href="#about" class="website-description-text link-hover mt-8">Learn More</a>
    </section>
  
    <!-- ABOUT SECTION -->
    <section id="about" class="py-20 container mx-auto text-center scroll-mt-20">
      <h2 class="website-header-text text-3xl font-bold mb-6">About Us</h2>
      <div class="website-description-text max-w-2xl mx-auto text-lg space-y-6">
        <p>Will Help LLC is a locally owned, owner-operated landscaping and property maintenance business focused on keeping outdoor spaces clean, safe, and well maintained.</p>
        &nbsp;
        <p>Services include landscaping and mulching, general landscape repairs, yard clean-ups, residential street cleaning, deep cleaning, snow removal, and junk removal.</p>
        &nbsp;
        <p>Being owner-operated means you work directly with the person doing the work from start to finish.</p>
        &nbsp;
        <p>The goal is simple: to help homeowners and residents maintain clean, functional, and attractive properties throughout the year.</p>
      </div>
    </section>
  
    <!-- SERVICES SECTION -->
    <section id="services" class="py-20 bg-base-200 scroll-mt-20">
      <div class="container mx-auto text-center">
        <h2 class="website-header-text text-3xl font-bold mb-10">Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="website-background-color card-shadow-lg p-6">
            <h3 class="website-header-text font-semibold text-xl mb-2">Landscaping & Mulching</h3>
            <p class="website-description-text">Professional landscaping services including mulching, bed maintenance, and general yard improvements to enhance your property.</p>
          </div>
          <div class="website-background-color card-shadow-lg p-6">
            <h3 class="website-header-text font-semibold text-xl mb-2">Yard Clean-Ups & Repairs</h3>
            <p class="website-description-text">Seasonal yard clean-ups, debris removal, and general landscape repairs to restore and maintain outdoor spaces.</p>
          </div>
          <div class="website-background-color card-shadow-lg p-6">
            <h3 class="website-header-text font-semibold text-xl mb-2">Residential Street & Deep Cleaning</h3>
            <p class="website-description-text">Street cleaning and deep outdoor cleaning services to remove dirt, leaves, and buildup for a safer neighborhood.</p>
          </div>
          <div class="website-background-color card-shadow-lg p-6">
            <h3 class="website-header-text font-semibold text-xl mb-2">Snow Removal</h3>
            <p class="website-description-text">Reliable snow removal for driveways, sidewalks, and walkways to keep your property accessible during winter.</p>
          </div>
          <div class="website-background-color card-shadow-lg p-6">
            <h3 class="website-header-text font-semibold text-xl mb-2">Junk Removal</h3>
            <p class="website-description-text">Fast and responsible junk removal services to clear unwanted items and yard waste with minimal hassle.</p>
          </div>
          <div class="website-background-color card-shadow-lg p-6">
            <h3 class="website-header-text font-semibold text-xl mb-2">General Property Maintenance</h3>
            <p class="website-description-text">Ongoing maintenance services designed to keep your property clean, functional, and well cared for all year.</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- SERVICE AREA SECTION -->
    <section id="service-area" class="py-20 container mx-auto text-center scroll-mt-20">
      <h2 class="website-header-text text-3xl font-bold mb-6">Service Area</h2>
      <p class="website-description-text max-w-2xl mx-auto text-lg mb-6">
        Based in Portola, California, Will Help LLC proudly serves clients across all of Plumas County.
      </p>
      <a href="#contact" class="website-description-text link-hover mt-4">Check Availability</a>
    </section>
  
    <!-- PORTFOLIO SECTION -->
    <section id="portfolio" style="display:none" class="py-20 container mx-auto text-center scroll-mt-20">
      <h2 class="website-header-text text-3xl font-bold mb-10">Portfolio</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="website-description-text website-background-color card-shadow-lg h-64 flex items-center justify-center">Project 1</div>
        <div class="website-description-text website-background-color card-shadow-lg h-64 flex items-center justify-center">Project 2</div>
        <div class="website-description-text website-background-color card-shadow-lg h-64 flex items-center justify-center">Project 3</div>
      </div>
    </section>
  
    <!-- CONTACT SECTION -->
    <section id="contact" class="py-20 bg-base-200 text-center scroll-mt-20">
      <h2 class="website-header-text text-3xl font-bold mb-6">Contact Information</h2>
      
      <p class="website-description-text max-w-xl mx-auto mb-6 text-gray-600">
        Have questions or need to get in touch? Reach out using the contact details below and we’ll respond as soon as possible.
      </p>

      <div class="grid grid-rows gap-4 mt-4 justify-center">
        <a href="mailto:wmckie@will-help.com" class="website-description-text link-hover">Email: wmckie@will-help.com</a>
        <a href="tel:+17073349113" class="website-description-text link-hover">Phone: (707) 416-1075</a>
      </div>
    </section>
 
    <!-- SUBMIT A REQUEST SECTION -->
    <section id="submitarequest" style="display:none" class="py-20 bg-base-200 text-center scroll-mt-20">
      <h2 class="website-header-text text-3xl font-bold mb-6">Submit a Request</h2>
    
      <form id="submit-a-request-form" class="max-w-xl mx-auto grid gap-6 text-left">
        <p class="website-description-text text-sm">
          Use the form below to request a service, consultation, or additional information. 
          Please provide as much detail as possible to better assist you.
        </p>

        <!-- First Name -->
        <input type="text" name="first_name" placeholder="First Name" class="form-fields" required>
    
        <!-- Last Name -->
        <input type="text" name="last_name" placeholder="Last Name" class="form-fields" required>
    
        <!-- Email -->
        <div>
          <input type="email" name="email" placeholder="Email" class="form-fields">
          <p class="website-description-text"> OR </p>
          <!-- Phone -->
          <input type="tel" name="phone_number" placeholder="Phone Number" class="form-fields">
        </div>
    
        <!-- Address -->
        <fieldset class="w-full">
          <legend class="website-description-text text-sm">Address</legend>
          <input type="text" name="address_line_1" placeholder="Address Line 1" class="form-fields mb-3" required>
          <input type="text" name="address_line_2" placeholder="Address Line 2 (optional)" class="form-fields">
          <input type="text" name="city" placeholder="City" class="form-fields col-span-3 w-full" required>
          <input type="text" name="state" placeholder="State" class="form-fields col-span-2 w-full" required>
          <input type="text" name="zip_code" maxlength=5 placeholder="ZIP Code" class="form-fields col-span-1 w-full" required>
        </fieldset>

        <!-- Service type dropdown -->
        <select name="request_type_code" class="website-description-text form-fields" required>
          <option value="" disabled selected>Select a service</option>
          <option value="landscaping and mulching">landscaping and mulching</option>
          <option value="installation">Installation</option>
          <option value="maintenance">Maintenance</option>
          <option value="other">Other</option>
        </select>
    
        <!-- Description -->
        <textarea name="description" maxlength="500" placeholder="Description (max 500 characters)" rows="5" class="form-fields" required></textarea>
    
        <!-- Submit button -->
        <button id="submit-a-request-button" type="submit"  class="custom-button">
          Submit Request
        </button>
      </form>
    </section> 
    `;
  }
  