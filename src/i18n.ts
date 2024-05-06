import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { BACKEND_URL } from './services/constants'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'fr',
    supportedLngs: ['en', 'fr'], // *** added this ***
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    backend: {
      loadPath: BACKEND_URL + '/locales/{{lng}}/{{ns}}.json'
    },
    resources: {
      en: {
        translation: {
          title: {
            listPrescriptions: 'List of prescriptions',
            pageNotFound: "Hey, this page doesn't exist!",
            addPatient: 'Add a new patient',
            addPrescription: 'Add a new prescription',
            editPrescription: 'Edit prescription',
            myAccount: 'My Account',
            profile: 'Profile',
            editPatient: 'Edit patient',
            noPatientToDisplay: 'No patient to display!',
            noPrescriptionToDisplay: 'No prescription to display!',
            myPatients: 'My patients',
            confirmation: 'Confirmation',
            login: 'Connection to application',
            register: 'Registration',
            renewPrescription: 'I renew this prescription',
            welcomeApp: 'Welcome on Mynotif',
            personalInfo: 'Personal Info',
            app: 'Mynotif'
          },
          navigation: {
            update: 'Update',
            login: 'Login',
            logout: 'Logout',
            register: 'Sign up',
            home: 'Back to home page',
            validate: 'Validate',
            delete: 'Delete',
            return: 'Return',
            resetPassword: 'Reset Password '
          },
          form: {
            emailAddress: 'Email address',
            password: 'Password',
            address: 'Address',
            userName: 'Username',
            firstName: 'Firstname',
            lastName: 'Lastname',
            phone: 'Phone',
            city: 'City',
            zipPostal: 'Postal Zip',
            doctor: 'Doctor',
            selectPatient: 'Select a patient',
            endDate: 'End date',
            startDate: 'Start date',
            carteVitale: 'Carte Vitale',
            caisseDeRattachement: 'Caisse de rattachement',
            selectYourPrescription: 'Select your prescription',
            newPassword: 'New password',
            confirmNewPassword: 'Confirm new password',
            birthday: 'Date of Birth'
          },
          text: {
            confirmationPatient: 'Are you sure you want to remove this patient?',
            confirmationPrescription: 'Are you sure you want to remove this prescription?',
            whichPatientAddOrder: 'Which patient would you like to add this prescription?',
            prescription: 'Prescriptions',
            patients: 'Patients',
            profile: 'Profile',
            admin: 'Admin',
            home: 'Home',
            alreadyAccount: 'Already have an account?',
            notAlreadyAccount: 'Don\'t have an account?',
            createAccount: 'Create an account',
            patient: 'Patient',
            endPrescription: 'End of prescription:',
            dr: 'Dr. ',
            editPatient: 'Edit',
            editPrescription: 'Edit',
            deletePatient: 'Delete',
            deletePrescription: 'Delete',
            actionsPrescriptions: 'I manage prescriptions',
            actionsPatients: 'I manage patients',
            seePatient: 'View',
            seePrescription: 'View',
            standardAccount: 'Standard account',
            notifications: 'Notifications',
            supportHelp: 'Help & Support',
            legalNotices: 'legal notices',
            forgotPassword: 'Forgot your Password?',
            resetPasswordEmail: 'Please enter the e-mail address',
            search: 'Search ...',
            searchDoctor: 'Search by doctor name, patient ...',
            createNewPassword: 'Create your new password',
            updatedPatient: 'The patient has been successfully updated',
            deletePatientList: 'The patient has been successfully deleted',
            createdPatient: 'The patient has been successfully created',
            updatedPrescription: 'The prescription has been updated successfully',
            createdPrescription: 'The prescription has been created successfully',
            userLogin: 'You have successfully logged in!',
            userRegister: 'Your account has been successfully created! Please log in to continue',
            userUpdated: 'Profile updated successfully',
            successResetPassword: 'You have successfully reset your password! \n Please check your inbox for instructions on how to create a new password.',
            welcome: 'Welcome',
            hey: 'Hey',
            name: 'Name',
            surName: 'Surname',
            email: 'Email',
            phone: 'Phone',
            running: 'RUNNING'
          },
          error: {
            errorLogin: 'Sorry, the email or password is incorrect!',
            emptyFieldError: 'Fields cannot be empty',
            passwordsMismatchError: 'Passwords don\'t match',
            passwordLengthError: 'Password must be at least 8 characters long',
            missResetParameters: 'Missing password reset parameters',
            updatedPatient: 'An error occurred while updating the patient',
            createdPatient: 'An error occurred during patient creation',
            updatedPrescription: 'An error occurred while updating the prescription',
            createdPrescription: 'An error occurred while creating the prescription',
            userLogin: 'Invalid username or password. Please try again',
            errorRegister: 'Error during registration',
            userUpdated: 'Error updating profile',
            requiredField: 'This field is required',
            minLengthError: 'You must enter at least {{count}} characters.',
            emailError: 'Please enter a valid email address'
          }
        }
      },
      fr: {
        translation: {
          title: {
            listPrescriptions: 'Liste des Ordonnances',
            pageNotFound: "Hey, cette page n'existe pas !",
            addPatient: 'Ajouter un nouveau patient',
            addPrescription: 'Ajouter une nouvelle ordonnance',
            editPrescription: "Modifier l'ordonnance",
            myAccount: 'Mon compte',
            profile: 'Profil',
            editPatient: 'Modifier un patient',
            noPatientToDisplay: 'Aucun patient à afficher !',
            noPrescriptionToDisplay: 'Aucune ordonnance à afficher !',
            myPatients: 'Mes patients',
            confirmation: 'Confirmation',
            login: 'Connection à l\'application',
            register: 'Inscription',
            renewPrescription: 'Je renouvelle cette ordonnance',
            welcomeApp: 'Bienvenue sur Mynotif',
            personalInfo: 'Informations personnelles',
            app: 'Mynotif'
          },
          navigation: {
            update: 'Modifier',
            login: 'Connexion',
            logout: 'Deconnexion',
            register: 'Inscription',
            home: "Retourner à l'accueil",
            validate: 'Valider',
            delete: 'Supprimer',
            return: 'Retour',
            resetPassword: 'Réinitialiser'
          },
          form: {
            emailAddress: 'Adresse email',
            password: 'Mot de passe',
            address: 'Adresse',
            userName: "Nom d'utilisateur",
            firstName: 'Prénom',
            lastName: 'Nom',
            phone: 'Téléphone',
            city: 'ville',
            zipPostal: 'code postal',
            doctor: 'Médecin',
            selectPatient: 'Sélectionne un patient',
            endDate: 'Date de fin',
            startDate: 'Date de début',
            carteVitale: 'Carte Vitale',
            caisseDeRattachement: 'Caisse de rattachement',
            selectYourPrescription: 'Séléctionne ton ordonnance',
            newPassword: 'Nouveau mot de passe',
            confirmNewPassword: 'Confirmer le nouveau mot de passe',
            birthday: 'Date de naissance'
          },
          text: {
            confirmationPatient: 'Etes vous sur de vouloir supprimer ce patient ?',
            confirmationPrescription: 'Etes vous sur de vouloir supprimer cette ordonnance ?',
            whichPatientAddOrder: 'A quel patient voulez-vous ajouter cette ordonnance ?',
            prescription: 'Ordonnance',
            patients: 'Patients',
            profile: 'Profil',
            admin: 'Admin',
            home: 'Accueil',
            alreadyAccount: 'Vous avez déjà un compte ?',
            notAlreadyAccount: 'Vous n\'avez pas de compte?',
            createAccount: 'Créer un compte',
            patient: 'Patient',
            endPrescription: 'Fin de l\'ordonnance :',
            dr: 'Dr. ',
            editPatient: 'Modifier',
            deletePatient: 'Supprimer',
            seePatient: 'Voir',
            seePrescription: 'Voir',
            editPrescription: 'Modifier',
            deletePrescription: 'Supprimer',
            actionsPrescriptions: 'Je gère l\'ordonnance',
            actionsPatients: 'Je gère mes patients',
            standardAccount: 'Compte standard',
            notifications: 'Notifications',
            supportHelp: 'Aide & Support',
            legalNotices: 'Mentions légales',
            forgotPassword: 'Mot de passe oublié ?',
            resetPasswordEmail: 'Veuillez entrer l\'adresse e-mail',
            search: 'Rechercher ...',
            searchDoctor: 'Rechercher par nom de medecin, patient ...',
            createNewPassword: 'Créer votre nouveau mot de passe',
            updatedPatient: 'Le patient a été mis à jour avec succès',
            deletePatientList: 'Le patient a été supprimé avec succès',
            createdPatient: 'Le patient a été créé avec succès',
            updatedPrescription: 'L\'ordonnance a été mis à jour avec succès',
            createdPrescription: 'L\'ordonnance a été créé avec succès',
            userLogin: 'Vous vous êtes connecté avec succès !',
            userRegister: 'Votre compte a été créé avec succès ! Veuillez vous connecter pour continuer',
            userUpdated: 'Profil mis à jour avec succès',
            successResetPassword: 'Vous avez réinitialisé votre mot de passe avec succès ! \n Veuillez consulter votre boîte de réception pour les instructions afin de créer un nouveau mot de passe.',
            welcome: 'Bienvenue',
            hey: 'Salut',
            name: 'Prénom',
            surName: 'Nom',
            email: 'Email',
            phone: 'Téléphone',
            running: 'EN COURS'
          },
          error: {
            errorLogin: 'Désolé, l\'email ou le mot de passe est incorrect !',
            emptyFieldError: 'Les champs ne peuvent pas être vides',
            passwordsMismatchError: 'Les mots de passe ne correspondent pas',
            passwordLengthError: 'Le mot de passe doit comporter au moins 8 caractères',
            missResetParameters: 'Paramètres de réinitialisation du mot de passe manquants',
            updatedPatient: 'Une erreur est survenue lors de la mise à jour du patient',
            createdPatient: 'Une erreur est survenue lors de la création du patient',
            updatedPrescription: 'Une erreur est survenue lors de la mise à jour de l\'ordonnance',
            createdPrescription: 'Une erreur est survenue lors de la création de l\'ordonnance',
            userLogin: 'Nom d\'utilisateur ou mot de passe invalide. Veuillez réessayer.',
            errorRegister: 'Erreur lors de l\'inscription',
            userUpdated: 'Erreur de mise à jour du profil',
            requiredField: 'Ce champ est requis',
            minLengthError: 'Vous devez entrer au moins {{count}} caractères.',
            emailError: 'Veuillez saisir une adresse e-mail valide'
          }
        }
      }
    }
  })
  .catch(console.error)

export default i18n
