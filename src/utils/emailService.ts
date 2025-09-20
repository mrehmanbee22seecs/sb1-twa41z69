// Email service utility for sending notifications
// In a production environment, this would integrate with your backend API

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ChatMessage {
  message: string;
  timestamp: string;
  page: string;
  userAgent: string;
}

export interface EventProjectIdea {
  name: string;
  email: string;
  phone: string;
  type: 'event' | 'project';
  title: string;
  description: string;
  location: string;
  expectedParticipants: string;
  budget: string;
  timeline: string;
  timestamp: string;
  page: string;
}

export interface VolunteerApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  city: string;
  occupation: string;
  experience: string;
  skills: string[];
  interests: string[];
  availability: string;
  motivation: string;
  timestamp: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface EventRegistration {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  dietaryRestrictions: string;
  experience: string;
  eventTitle: string;
  eventDate: string;
  timestamp: string;
}

export interface ProjectApplication {
  name: string;
  email: string;
  phone: string;
  experience: string;
  motivation: string;
  projectTitle: string;
  timestamp: string;
}

const ADMIN_EMAIL = 'muneebtahir08@gmail.com';

// Format chat message email
export const formatChatMessageEmail = (data: ChatMessage): EmailData => {
  return {
    to: ADMIN_EMAIL,
    subject: `New Chat Message from Wasilah Website`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E67E22, #F39C12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Chat Message</h1>
          <p style="color: white; margin: 5px 0;">Wasilah Website</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #2C3E50; margin-bottom: 20px;">Message Details</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">User Message:</h3>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px; font-style: italic;">
              "${data.message}"
            </p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #E67E22; margin-top: 0;">Additional Information:</h3>
            <p><strong>Page:</strong> ${data.page}</p>
            <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
            <p><strong>User Agent:</strong> ${data.userAgent}</p>
          </div>
        </div>
        
        <div style="background: #2C3E50; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">This message was sent from the Wasilah website chat widget.</p>
        </div>
      </div>
    `,
    text: `New Chat Message from Wasilah Website\n\nMessage: ${data.message}\nPage: ${data.page}\nTimestamp: ${new Date(data.timestamp).toLocaleString()}`
  };
};

// Format event/project idea email
export const formatEventProjectIdeaEmail = (data: EventProjectIdea): EmailData => {
  return {
    to: ADMIN_EMAIL,
    subject: `New ${data.type.charAt(0).toUpperCase() + data.type.slice(1)} Idea: ${data.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E67E22, #F39C12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New ${data.type.charAt(0).toUpperCase() + data.type.slice(1)} Idea</h1>
          <p style="color: white; margin: 5px 0;">Wasilah Website</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #2C3E50; margin-bottom: 20px;">${data.title}</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">${data.type.charAt(0).toUpperCase() + data.type.slice(1)} Details:</h3>
            <p><strong>Type:</strong> ${data.type.charAt(0).toUpperCase() + data.type.slice(1)}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Description:</strong></p>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px;">${data.description}</p>
            <p><strong>Location:</strong> ${data.location || 'Not specified'}</p>
            <p><strong>Expected Participants:</strong> ${data.expectedParticipants || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #E67E22; margin-top: 0;">Submission Details:</h3>
            <p><strong>Submitted from:</strong> ${data.page}</p>
            <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
          </div>
        </div>
        
        <div style="background: #2C3E50; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">This idea was submitted through the Wasilah website chat widget.</p>
        </div>
      </div>
    `,
    text: `New ${data.type} Idea: ${data.title}\n\nFrom: ${data.name} (${data.email})\nDescription: ${data.description}\nSubmitted: ${new Date(data.timestamp).toLocaleString()}`
  };
};

// Format volunteer application email
export const formatVolunteerApplicationEmail = (data: VolunteerApplication): EmailData => {
  return {
    to: ADMIN_EMAIL,
    subject: `New Volunteer Application: ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E67E22, #F39C12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Volunteer Application</h1>
          <p style="color: white; margin: 5px 0;">Wasilah Website</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #2C3E50; margin-bottom: 20px;">${data.firstName} ${data.lastName}</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Personal Information:</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Age:</strong> ${data.age || 'Not provided'}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Occupation:</strong> ${data.occupation || 'Not provided'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Skills & Interests:</h3>
            <p><strong>Skills:</strong> ${data.skills.length > 0 ? data.skills.join(', ') : 'None specified'}</p>
            <p><strong>Areas of Interest:</strong> ${data.interests.length > 0 ? data.interests.join(', ') : 'None specified'}</p>
            <p><strong>Availability:</strong> ${data.availability}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Experience & Motivation:</h3>
            <p><strong>Previous Experience:</strong></p>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px;">${data.experience || 'No previous experience mentioned'}</p>
            <p><strong>Motivation:</strong></p>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px;">${data.motivation || 'No motivation statement provided'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #E67E22; margin-top: 0;">Application Details:</h3>
            <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
          </div>
        </div>
        
        <div style="background: #2C3E50; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">This application was submitted through the Wasilah volunteer registration form.</p>
        </div>
      </div>
    `,
    text: `New Volunteer Application from ${data.firstName} ${data.lastName}\n\nEmail: ${data.email}\nPhone: ${data.phone}\nCity: ${data.city}\nAvailability: ${data.availability}\nSubmitted: ${new Date(data.timestamp).toLocaleString()}`
  };
};

// Format contact message email
export const formatContactMessageEmail = (data: ContactMessage): EmailData => {
  return {
    to: ADMIN_EMAIL,
    subject: `Contact Form: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E67E22, #F39C12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Message</h1>
          <p style="color: white; margin: 5px 0;">Wasilah Website</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #2C3E50; margin-bottom: 20px;">${data.subject}</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Message:</h3>
            <p style="background: #f1f2f6; padding: 15px; border-radius: 5px; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #E67E22; margin-top: 0;">Message Details:</h3>
            <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
          </div>
        </div>
        
        <div style="background: #2C3E50; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">This message was sent through the Wasilah contact form.</p>
        </div>
      </div>
    `,
    text: `Contact Form Message: ${data.subject}\n\nFrom: ${data.name} (${data.email})\nMessage: ${data.message}\nSubmitted: ${new Date(data.timestamp).toLocaleString()}`
  };
};

// Format event registration email
export const formatEventRegistrationEmail = (data: EventRegistration): EmailData => {
  return {
    to: ADMIN_EMAIL,
    subject: `Event Registration: ${data.eventTitle} - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E67E22, #F39C12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Event Registration</h1>
          <p style="color: white; margin: 5px 0;">Wasilah Website</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #2C3E50; margin-bottom: 20px;">${data.eventTitle}</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Participant Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Emergency Contact:</strong> ${data.emergencyContact || 'Not provided'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Additional Information:</h3>
            <p><strong>Dietary Restrictions:</strong> ${data.dietaryRestrictions || 'None'}</p>
            <p><strong>Previous Experience:</strong></p>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px;">${data.experience || 'No previous experience mentioned'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #E67E22; margin-top: 0;">Registration Details:</h3>
            <p><strong>Event:</strong> ${data.eventTitle}</p>
            <p><strong>Event Date:</strong> ${data.eventDate}</p>
            <p><strong>Registered:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
          </div>
        </div>
        
        <div style="background: #2C3E50; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">This registration was submitted through the Wasilah event registration form.</p>
        </div>
      </div>
    `,
    text: `Event Registration: ${data.eventTitle}\n\nParticipant: ${data.name} (${data.email})\nPhone: ${data.phone}\nEvent Date: ${data.eventDate}\nRegistered: ${new Date(data.timestamp).toLocaleString()}`
  };
};

// Format project application email
export const formatProjectApplicationEmail = (data: ProjectApplication): EmailData => {
  return {
    to: ADMIN_EMAIL,
    subject: `Project Application: ${data.projectTitle} - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E67E22, #F39C12); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Project Application</h1>
          <p style="color: white; margin: 5px 0;">Wasilah Website</p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #2C3E50; margin-bottom: 20px;">${data.projectTitle}</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Applicant Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #E67E22; margin-top: 0;">Experience & Motivation:</h3>
            <p><strong>Relevant Experience:</strong></p>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px;">${data.experience || 'No experience mentioned'}</p>
            <p><strong>Motivation:</strong></p>
            <p style="background: #f1f2f6; padding: 10px; border-radius: 5px;">${data.motivation || 'No motivation statement provided'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #E67E22; margin-top: 0;">Application Details:</h3>
            <p><strong>Project:</strong> ${data.projectTitle}</p>
            <p><strong>Applied:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
          </div>
        </div>
        
        <div style="background: #2C3E50; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">This application was submitted through the Wasilah project application form.</p>
        </div>
      </div>
    `,
    text: `Project Application: ${data.projectTitle}\n\nApplicant: ${data.name} (${data.email})\nPhone: ${data.phone}\nApplied: ${new Date(data.timestamp).toLocaleString()}`
  };
};

// Main email sending function (to be implemented with your backend)
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // In a real application, this would call your backend API
    // For now, we'll log the email data
    console.log('Sending email to:', emailData.to);
    console.log('Subject:', emailData.subject);
    console.log('HTML Content:', emailData.html);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};