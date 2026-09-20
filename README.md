# White Dolphin website — photos, projects and enquiries

## Upload
Unzip the package. Upload all files and the complete assets folder into the GitHub repository root, replacing matching files. Keep exact filenames. Do not upload the ZIP itself. The existing GitHub Pages site will update after the commit and deployment complete.

## Activate email enquiries — required
The form is configured to send name, email, phone and message to wd.decoration@gmail.com through https://formsubmit.co/ . No Gmail password or API key is needed. CAPTCHA remains enabled.
1. After publishing, open the LIVE website and submit one clearly labelled test enquiry.
2. Open wd.decoration@gmail.com and find the FormSubmit activation email (check Spam too).
3. Click its confirmation link.
4. Submit a SECOND test enquiry and verify that all four fields arrive in Gmail. Reply to that email to contact the sender.
Until activation and the second test are complete, email delivery is not verified. The form uses the provider's confirmation/error page; it does not pretend delivery succeeded locally. Do not test by double-clicking the local HTML file.

## Add 50–60 project photographs
The gallery supports additional images and shows 12 at a time with a Load more button. Photos open in a larger viewer with next/previous controls and Escape to close.
1. Upload new photographs into assets, using simple names such as project-07.jpeg, project-08.jpeg and so on.
2. Edit projects.js in GitHub. Add an entry for each image to the existing list, separated by commas:
   {"src":"assets/project-07.jpeg","alt":"Project photograph 7"}
3. Commit the images and the updated projects.js file.
Uploading an image alone does not add it to the gallery; the list must also include it. The gallery is public and has no visitor upload control. You can also send the remaining photos to have the list prepared for you.

## Included
Six supplied project photographs appear on the homepage and Projects page. The company-profile screenshot is used as a content reference, not displayed as a screenshot. The previous stock hero photograph is replaced with your own photograph. All earlier company documentation text remains unchanged. Only requested gallery/form controls and the form-service disclosure were added. No end-to-end email delivery test has been performed.
