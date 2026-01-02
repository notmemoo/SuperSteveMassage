import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'memomar168@gmail.com';

interface BodyMarker {
  id: string;
  x: number;
  y: number;
  view: "front" | "back" | "left" | "right";
  description: string;
}

interface IntakeFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  howDidYouHear: string;
  previousMassageExperience: string;
  areasToFocus: string;
  areasToAvoid: string;
  numbnessOrTingling: string;
  medicalConditions: string[];
  allergyList: string;
  surgeryHistory: string;
  jointIssueAreas: string;
  currentMedications: string;
  bloodPressureMeds: string;
  skinAllergies: string;
  bodyMarkers: BodyMarker[];
  causeOfInjury: string;
  painScale: string;
  painWorse: string;
  painRelief: string;
  treatmentGoals: string;
  howLongSinceNoticed: string;
  pastTreatments: string;
  recentlyBeenSick: string;
  currentNumbness: string;
  alcoholLast24Hours: string;
  marijuanaLast30Days: string;
  painMedsLast24Hours: string;
  recentSurgeries: string;
  difficultyLayingDown: string;
  recentTattoos: string;
  glutesPermission: string;
  chestPermission: string;
  waiverAgreed: boolean;
  waiverDate: string;
}

export async function POST(request: Request) {
  try {
    const data: IntakeFormData = await request.json();

    // Format body markers for display
    const bodyMarkersHtml = data.bodyMarkers.length > 0
      ? data.bodyMarkers.map(m => `<li>${m.view} view: ${m.description}</li>`).join('')
      : '<li>None marked</li>';

    // Format medical conditions
    const medicalConditionsHtml = data.medicalConditions.length > 0
      ? data.medicalConditions.map(c => `<span style="background: #fee; padding: 2px 8px; border-radius: 4px; margin: 2px; display: inline-block;">${c}</span>`).join(' ')
      : 'None reported';

    // Send email to Steve
    await resend.emails.send({
      from: 'Super Steve Massage <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `📋 New Client Intake Form: ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #2D2D2D;">
          <h1 style="color: #C4704A; border-bottom: 3px solid #C4704A; padding-bottom: 10px;">
            New Client Intake Form
          </h1>
          
          <!-- Contact Information -->
          <div style="background: #FDFBF9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #C4704A; margin-top: 0;">👤 Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0;"><strong>Name:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td>${data.phone}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>DOB:</strong></td><td>${data.birthMonth}/${data.birthDay}/${data.birthYear}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Address:</strong></td><td>${data.streetAddress}, ${data.city}, ${data.state} ${data.zipCode}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Emergency Contact:</strong></td><td>${data.emergencyContactName} - ${data.emergencyContactPhone}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>How did you hear about us?</strong></td><td>${data.howDidYouHear || 'Not specified'}</td></tr>
            </table>
          </div>

          <!-- Massage Experience -->
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #C4704A; margin-top: 0;">💆 Massage Experience</h2>
            <p><strong>Previous Experience:</strong> ${data.previousMassageExperience || 'Not specified'}</p>
            <p><strong>Areas to Focus:</strong> ${data.areasToFocus || 'Not specified'}</p>
            <p><strong>Areas to Avoid:</strong> ${data.areasToAvoid || 'None'}</p>
            <p><strong>Numbness/Tingling:</strong> ${data.numbnessOrTingling || 'None'}</p>
          </div>

          <!-- Medical History -->
          <div style="background: #fff5f5; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fcc;">
            <h2 style="color: #C4704A; margin-top: 0;">🏥 Medical History</h2>
            <p><strong>Medical Conditions:</strong></p>
            <div style="margin-bottom: 10px;">${medicalConditionsHtml}</div>
            <p><strong>Allergies:</strong> ${data.allergyList || 'None'}</p>
            <p><strong>Surgery History:</strong> ${data.surgeryHistory || 'None'}</p>
            <p><strong>Joint Issues:</strong> ${data.jointIssueAreas || 'None'}</p>
            <p><strong>Current Medications:</strong> ${data.currentMedications || 'None'}</p>
            <p><strong>Blood Pressure Meds:</strong> ${data.bloodPressureMeds || 'None'}</p>
            <p><strong>Skin Allergies:</strong> ${data.skinAllergies || 'None'}</p>
          </div>

          <!-- Pain & Body Areas -->
          <div style="background: #FDFBF9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #C4704A; margin-top: 0;">🎯 Pain & Body Areas</h2>
            <p><strong>Areas Marked on Diagram:</strong></p>
            <ul>${bodyMarkersHtml}</ul>
            <p><strong>Cause of Injury:</strong> ${data.causeOfInjury || 'Not specified'}</p>
            <p><strong>Pain Scale (1-10):</strong> ${data.painScale || 'Not rated'}</p>
            <p><strong>What makes it worse:</strong> ${data.painWorse || 'Not specified'}</p>
            <p><strong>What brings relief:</strong> ${data.painRelief || 'Not specified'}</p>
            <p><strong>Treatment Goals:</strong> ${data.treatmentGoals || 'Not specified'}</p>
            <p><strong>How long since noticed:</strong> ${data.howLongSinceNoticed || 'Not specified'}</p>
            <p><strong>Past Treatments:</strong> ${data.pastTreatments || 'None'}</p>
          </div>

          <!-- Recent History -->
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #C4704A; margin-top: 0;">📋 Recent History (Past 2 Weeks)</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0;"><strong>Recently been sick?</strong></td><td>${data.recentlyBeenSick || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Current numbness?</strong></td><td>${data.currentNumbness || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Alcohol (last 24h)?</strong></td><td>${data.alcoholLast24Hours || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Marijuana (last 30 days)?</strong></td><td>${data.marijuanaLast30Days || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Pain meds (last 24h)?</strong></td><td>${data.painMedsLast24Hours || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Recent surgeries?</strong></td><td>${data.recentSurgeries || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Difficulty laying down?</strong></td><td>${data.difficultyLayingDown || 'No'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Recent tattoos?</strong></td><td>${data.recentTattoos || 'No'}</td></tr>
            </table>
          </div>

          <!-- Consent -->
          <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #a5d6a7;">
            <h2 style="color: #2e7d32; margin-top: 0;">✅ Consent & Signatures</h2>
            <p><strong>Glutes Permission:</strong> ${data.glutesPermission || 'Not specified'} ${data.glutesPermission === 'yes' ? '✓ Signed' : ''}</p>
            <p><strong>Chest Permission:</strong> ${data.chestPermission || 'Not specified'} ${data.chestPermission === 'yes' ? '✓ Signed' : ''}</p>
            <p><strong>Communication Agreement:</strong> ✓ Signed</p>
            <p><strong>Waiver:</strong> ${data.waiverAgreed ? '✓ Agreed & Signed' : 'Not agreed'}</p>
            <p><strong>Date:</strong> ${data.waiverDate}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 15px;">
            This intake form was submitted from superstevemassage.com on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Intake form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit intake form' },
      { status: 500 }
    );
  }
}
