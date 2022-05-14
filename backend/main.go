package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/google/uuid"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const ATLASUSER = "admin"
const ATLASPASS = "admin"
const ATLASDB = "GoalTracker"

const USERTABLE = "User"

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	client, err := mongo.NewClient(options.Client().ApplyURI(fmt.Sprintf("mongodb+srv://%s:%s@goaltracker.ovawj.mongodb.net/%s?retryWrites=true&w=majority", ATLASUSER, ATLASPASS, ATLASDB)))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)

	goalTrackerDatabase := client.Database(ATLASDB)
	userCollection := goalTrackerDatabase.Collection(USERTABLE)

	user := User{
		ID:   uuid.New().String(),
		Name: "Joshua Chen",
	}

	AddUser(ctx, userCollection, user)
}

func AddUser(ctx context.Context, collection *mongo.Collection, user User) error {
	addedUser, err := collection.InsertOne(ctx, bson.D{
		{Key: "id", Value: user.ID},
		{Key: "name", Value: user.Name},
	})
	if err != nil {
		return nil
	}

	fmt.Println(addedUser)
	return nil
}
