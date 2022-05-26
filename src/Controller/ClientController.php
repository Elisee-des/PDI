<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

// /**
//  * 
//  * @Route("/{reactRouting}", name="app_home", requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null})
//  * 
//  */

/**
 * @Route("/api", name="api_")
 */
class ClientController extends AbstractController
{
    /**
     * @Route("/admin/utilisateur/liste", name="utilisateur_liste")
     */
    public function listeUtilisateur(UserRepository $userRepo): Response
    {
        $user = $userRepo->apiFindUser();

        $encoders = [new JsonEncoder()];

        $normalizer = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizer, $encoders);

        $jsonContent = $serializer->serialize($user, "json", [
            "circular_reference_handler" => function ($object) {
                return $object->getId();
            }
        ]);

        $response = new Response($jsonContent);

        $response->headers->set("Content-Type", "application/json");

        return $response;
    }

    /**
     * @Route("/admin/utilisateur/detail/{id}", name="utilisateur_detail")
     */
    public function detailUtilisateur(User $user): Response
    {
        $encoders = [new JsonEncoder()];

        $normalizer = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizer, $encoders);

        $jsonContent = $serializer->serialize($user, "json", [
            "circular_reference_handler" => function ($object) {
                return $object->getId();
            }
        ]);

        $response = new Response($jsonContent);

        $response->headers->set("Content-Type", "application/json");

        return $response;
    }


    /**
     * @Route("/admin/utilisateur/creation/", name="creation_utilisateur", methods={"POST"})
     */
    public function creationUtilisateur(ManagerRegistry $managerRegi, Request $request)
    {
        $donnee = json_decode($request->getContent());

        if (
            property_exists($donnee, "nomutilisateur") && property_exists($donnee, "password")
            && property_exists($donnee, "email")
        ) {
            $user = new User();
            $user->setNomutilisateur($donnee->nomutilisateur);
            $user->setPassword($donnee->password);
            $user->setEmail($donnee->email);
            $em = $managerRegi->getManager();
            $em->persist($user);
            $em->flush();

            return new Response("ok", 201);
        } else return $this->json(["succes" => false, "erreur" => "Données incorrecte"], 400);
    }

    /**
     * @Route("/admin/utilisateur/editer/{id}", name="api_utilisateur_editer", methods={"PUT"})
     */
    public function EditerUtilisateur(?User $user, Request $request, ManagerRegistry $managerRegi): Response
    {

        $donnee = json_decode($request->getContent());

        $code = 200;

        if ($user) {
            $user->setNomutilisateur($donnee->nomutilisateur);
            $user->setEmail($donnee->email);
            $user->setPassword($donnee->password);

            $em = $managerRegi->getManager();
            $em->persist($user);
            $em->flush();

            return new Response('Modifier avec success', $code);
        } else return $this->json(["erreur" => "Données introuvable"], 400);
    }

    /**
     * @Route("/admin/utilisateur/suppression/{id}", name="suppresion", methods={"DELETE"})
     */
    public function suppressionUtilsateur(User $user, ManagerRegistry $managerRegi, $id)
    {
        if ($user != null) {
            $em = $managerRegi->getManager();
            $em->remove($user);
            $em->flush();
            return new Response(null, 204);
        } return $this->json(["erreur"=>"utilsateur non trouvé"],404);
    }
}
